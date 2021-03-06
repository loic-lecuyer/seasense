using Exavision.Seasense.Shared.Models;
using Microsoft.AspNetCore.Http;
using Serilog;
using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Exavision.Seasense.Server.Services {
    public class WebSocketClient {
        private WebSocket webSocket;
        private readonly HttpContext context;
        private CancellationTokenSource cancelSource;

        public HttpContext Context => this.context;
        public User User { get; set; }

        public event EventHandler<WebSocketClient> OnDisconnected;
        public event EventHandler<WebSocketClientMessage> OnReceiveMessage;

        public WebSocketClient(WebSocket webSocket, HttpContext context) {
            this.webSocket = webSocket;
            this.context = context;
        }

        internal async Task Start() {
            this.cancelSource = new CancellationTokenSource();
            await this.ListenMessages();
        }

        private async Task ListenMessages() {
            try {

                WebSocketReceiveResult result = null;

                while (!this.cancelSource.IsCancellationRequested) {
                    result = await this.TryReadMessages(result);
                    if (result != null && webSocket.State == WebSocketState.Open) {
                        await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, this.cancelSource.Token);
                    }
                    this.Stop();
                    this.OnDisconnected(this, this);


                }
            }
            catch (Exception ex) {
                if (!this.cancelSource.IsCancellationRequested) {
                    string log = "WebSocketClient Error when ListenMessages " + ex.Message;
                    Log.Warning(log);
                }
            }
        }
        private async Task<WebSocketReceiveResult> TryReadMessages(WebSocketReceiveResult result) {
            byte[] buffer = new byte[1024];
            ArraySegment<byte> segment = new(buffer);
            string message;
            string log;
            while (result == null || !result.CloseStatus.HasValue) {
                result = await webSocket.ReceiveAsync(segment, this.cancelSource.Token);
                if (this.cancelSource.IsCancellationRequested) {
                    try { await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None); }
                    catch (Exception ex) {
                        log = "WebSocketClient Error When Close Async " + ex.Message;
                        Log.Warning(log);
                    }
                    this.OnDisconnected(this, this);
                    return result;
                }
                message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                this.OnReceiveMessage(this, new WebSocketClientMessage() { Client = this, Message = message });



            }
            return result;
        }

        internal async Task Send(string responseText) {
            await webSocket.SendAsync(System.Text.Encoding.UTF8.GetBytes(responseText), WebSocketMessageType.Text, true, this.cancelSource.Token);
        }

        private void Stop() {

            if (!this.cancelSource.IsCancellationRequested) {
                this.cancelSource.Cancel();
            }
            try { webSocket?.Dispose(); }
            catch (Exception ex) {
                string log = "Error when Stop WebSocketClient " + ex.Message;
                Log.Information(log);
            }

        }
    }
}
