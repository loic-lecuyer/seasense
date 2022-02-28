using Exavision.Seasense.Api.WebSocket.Core;
using Exavision.Seasense.Api.WebSocket.Turret;
using Exavision.Seasense.Shared.Capabilities.Turret;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Serilog;
using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Threading.Tasks;

namespace Exavision.Seasense.Server.Services {
    public class WebSocketService : IWebSocketService {
        private readonly object clientLocker = new object();
        private readonly IOptions<MvcNewtonsoftJsonOptions> mvcSerializationOptions;
        private readonly ITokenService tokenService;
        private readonly IUserRepository userRepository;
        private readonly ISiteService siteService;
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

        JsonSerializerSettings serializationSetting;
        public WebSocketService(IOptions<MvcNewtonsoftJsonOptions> mvcSerializationOptions, ITokenService tokenService, IUserRepository userRepository, ISiteService siteService) {

            this.serializationSetting = mvcSerializationOptions.Value.SerializerSettings;
            this.tokenService = tokenService;
            this.userRepository = userRepository;
            this.siteService = siteService;
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
            if (String.IsNullOrEmpty(e.Message)) return;
            string requestId = "Undefined";
            try {
                WsRequest request = JsonConvert.DeserializeObject<WsRequest>(e.Message, this.serializationSetting);
                requestId = request.RequestId;
                if (this.tokenService.IsTokenValid(request.Token, out string userId)) {
                    User user = this.userRepository.FindUserById(userId);
                    if (user == null) throw new InvalidOperationException("Invalid user Id");
                    IUnit unit = this.siteService.FindUnitById(request.UnitId);
                    IMaterial material = unit.GetMaterialById(request.MaterialId);
                    this.ProcessRequest(request, unit, material, user);


                }
                else {

                    throw new InvalidOperationException("Invalid token");
                }

            }
            catch (Exception ex) {
                this.SendError(e.Client, requestId, ex.Message);
                Log.Error("Unable to deserialize WebSocket message " + e.Message + ", Exception " + ex.Message);
            }


        }

        private void ProcessRequest(WsRequest request, IUnit unit, IMaterial material, User user) {
            if (request is WsTurretMoveSpeedRequest req) {

                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");
                ITurretMoveSpeedCapability capability = material.GetCapability<ITurretMoveSpeedCapability>();
                if (capability == null) throw new InvalidOperationException("No capability of type ITurretMoveSpeedCapability on material");
                capability.MoveSpeed(req.AxisX, req.AxisY);
            }
        }

        private void SendError(WebSocketClient client, string requestId, string errorMessage) {
            WsErrorResponse response = new WsErrorResponse() {
                RequestId = requestId,
                ErrorMessage = errorMessage
            };
            string responseText = JsonConvert.SerializeObject(response);
            client.Send(responseText);
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
