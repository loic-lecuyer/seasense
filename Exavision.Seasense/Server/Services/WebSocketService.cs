using Microsoft.AspNetCore.Http;
using Serilog;
using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Threading.Tasks;

namespace Exavision.Seasense.Server.Services {
    public class WebSocketService : IWebSocketService {
        private readonly object clientLocker = new object();
        private List<WebSocketClient> clients = new List<WebSocketClient>();
        public async Task HandleRequest(HttpContext context, Func<Task> next) {
            if (context.WebSockets.IsWebSocketRequest) {
                var webSocket = await context.WebSockets.AcceptWebSocketAsync();
                WebSocketClient client = this.AddClient(webSocket);
                await client.Start();
            }
            else {
                await next();
            }
        }

        private WebSocketClient AddClient(WebSocket webSocket) {
            lock (clientLocker) {
                WebSocketClient client = new(webSocket);
                client.OnDisconnected += this.Client_OnDisconnected;
                client.OnReceiveMessage += this.Client_OnReceiveMessage;
                this.clients.Add(client);
                string log = "WebsocketService : client Added, total Count " + this.clients.Count;
                Log.Information(log);
                return client;
            }
        }

        private void Client_OnReceiveMessage(object sender, WebSocketClientMessage e) {

        }

        private void Client_OnDisconnected(object sender, WebSocketClient e) {
            lock (this.clientLocker) {
                if (this.clients.Contains(e)) this.clients.Remove(e);
                e.OnDisconnected -= this.Client_OnDisconnected;
                e.OnReceiveMessage -= this.Client_OnReceiveMessage;
                Console.WriteLine("Client disconnected , count client " + this.clients.Count);
            }
        }
    }
}
