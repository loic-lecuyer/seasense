using Exavision.Seasense.Api.WebSocket.Camera;
using Exavision.Seasense.Api.WebSocket.Core;
using Exavision.Seasense.Api.WebSocket.LazerMeasurement;
using Exavision.Seasense.Api.WebSocket.States;
using Exavision.Seasense.Api.WebSocket.Turret;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Capabilities.Camera;
using Exavision.Seasense.Shared.Capabilities.LazerMeasurement;
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
using System.Linq;
using System.Net.WebSockets;
using System.Threading.Tasks;

namespace Exavision.Seasense.Server.Services {
    public class WebSocketService : IWebSocketService {
        private readonly object clientLocker = new object();
        private readonly ITokenService tokenService;
        private readonly IUserRepository userRepository;
        private readonly ISiteService siteService;
        private readonly JsonSerializerSettings serializationSetting;
        private readonly List<WebSocketClient> clients = new List<WebSocketClient>();
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

                    this.ProcessRequest(request, user, e.Client);


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

        private void ProcessRequest(WsRequest request, User user, WebSocketClient client) {

            if (request is WsTurretMoveSpeedRequest reqTurretMoveSpeed) {

                IUnit unit = this.siteService.FindUnitById(reqTurretMoveSpeed.UnitId);
                IMaterial material = unit.GetMaterialById(reqTurretMoveSpeed.MaterialId);
                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");
                ITurretMoveSpeedCapability capability = material.GetCapability<ITurretMoveSpeedCapability>();
                if (capability == null) throw new InvalidOperationException("No capability of type ITurretMoveSpeedCapability on material");
                capability.MoveSpeed(reqTurretMoveSpeed.Speed.X, reqTurretMoveSpeed.Speed.Y);
                this.SendValid(request.RequestId, client);

            }
            else if (request is WsGetStateRequest reqGetState) {
                WsResponse response = new WsGetStateResponse() { RequestId = request.RequestId, Site = this.siteService.GetState() };
                this.SendResponse(response, client);
            }
            else if (request is WsCameraZoomStopRequest cameraZoomStopRequest) {
                IUnit unit = this.siteService.FindUnitById(cameraZoomStopRequest.UnitId);
                IMaterial material = unit.GetMaterialById(cameraZoomStopRequest.MaterialId);
                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");
                ICameraZoomContinuousCapability capability = material.GetCapability<ICameraZoomContinuousCapability>();
                if (capability == null) throw new InvalidOperationException("No capability of type ITurretMoveSpeedCapability on material");
                capability.ZoomStop();
                this.SendValid(request.RequestId, client);
            }
            else if (request is WsCameraZoomInStartRequest cameraZoomInStartRequest) {
                IUnit unit = this.siteService.FindUnitById(cameraZoomInStartRequest.UnitId);
                IMaterial material = unit.GetMaterialById(cameraZoomInStartRequest.MaterialId);
                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");
                ICameraZoomContinuousCapability capability = material.GetCapability<ICameraZoomContinuousCapability>();
                if (capability == null) throw new InvalidOperationException("No capability of type ITurretMoveSpeedCapability on material");
                capability.ZoomInStart();
                this.SendValid(request.RequestId, client);
            }
            else if (request is WsCameraZoomOutStartRequest cameraZoomOutStartRequest) {
                IUnit unit = this.siteService.FindUnitById(cameraZoomOutStartRequest.UnitId);
                IMaterial material = unit.GetMaterialById(cameraZoomOutStartRequest.MaterialId);
                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");
                ICameraZoomContinuousCapability capability = material.GetCapability<ICameraZoomContinuousCapability>();
                if (capability == null) throw new InvalidOperationException("No capability of type ITurretMoveSpeedCapability on material");
                capability.ZoomOutStart();
                this.SendValid(request.RequestId, client);
            }

            else if (request is WsTurretGyrostabilizationRequest turretGyrostabilizationRequest) {
                IUnit unit = this.siteService.FindUnitById(turretGyrostabilizationRequest.UnitId);
                IMaterial material = unit.GetMaterialById(turretGyrostabilizationRequest.MaterialId);
                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");
                ITurretGyrostabilizationCapability capability = material.GetCapability<ITurretGyrostabilizationCapability>();
                if (capability == null) throw new InvalidOperationException("No capability of type ITurretGyrostabilizationCapability on material");
                capability.SetGyrostabilization(turretGyrostabilizationRequest.Enabled);
                this.SendValid(request.RequestId, client);
            }
            else if (request is WsCameraAutoFocusOnePushRequest cameraAutoFocusOnePushRequest) {

                IUnit unit = this.siteService.FindUnitById(cameraAutoFocusOnePushRequest.UnitId);
                IMaterial material = unit.GetMaterialById(cameraAutoFocusOnePushRequest.MaterialId);
                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");
                ICameraAutoFocusOnePushCapability capability = material.GetCapability<ICameraAutoFocusOnePushCapability>();
                if (capability == null) throw new InvalidOperationException("No capability of type ITurretGyrostabilizationCapability on material");
                capability.AutoFocusOnePush();
                this.SendValid(request.RequestId, client);
            }

            else if (request is WsLazerMeasurementShootRequest lazerMeasurementShootRequest) {
                IUnit unit = this.siteService.FindUnitById(lazerMeasurementShootRequest.UnitId);
                IMaterial material = unit.GetMaterialById(lazerMeasurementShootRequest.MaterialId);
                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");
                ILazerMeasurementShootCapability capability = material.GetCapability<ILazerMeasurementShootCapability>();
                if (capability == null) throw new InvalidOperationException("No capability of type ITurretGyrostabilizationCapability on material");
                capability.ShootMeasurement();
                this.SendValid(request.RequestId, client);
            }
            else if (request is WsDoubleValueSetRequest doubleValueSetRequest) {
                IUnit unit = this.siteService.FindUnitById(doubleValueSetRequest.UnitId);
                IMaterial material = unit.GetMaterialById(doubleValueSetRequest.MaterialId);
                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");

                ICapability capability = material.GetCapabilityById(doubleValueSetRequest.CapabilityId);
                if (capability == null) throw new InvalidOperationException("No capability  on material");
                if (capability is DoubleValueCapability doubleValueCapability) {
                    doubleValueCapability.SetValue(doubleValueSetRequest.Value);
                    this.SendValid(request.RequestId, client);
                }
                else this.SendError(client, request.RequestId, "Invalid capability type");

            }
            else if (request is WsSwitchValueSetRequest switchValueSetRequest) {
                IUnit unit = this.siteService.FindUnitById(switchValueSetRequest.UnitId);
                IMaterial material = unit.GetMaterialById(switchValueSetRequest.MaterialId);
                if (unit == null) throw new InvalidOperationException("Invalid unit Id");
                if (material == null) throw new InvalidOperationException("Invalid material Id");

                ICapability capability = material.GetCapabilityById(switchValueSetRequest.CapabilityId);
                if (capability == null) throw new InvalidOperationException("No capability  on material");
                if (capability is SwitchValueCapability switchValueCapability) {
                    SwitchValue val = (from v in switchValueCapability.Values where v.Value.Equals(switchValueSetRequest.Value) select v).FirstOrDefault();
                    switchValueCapability.SetValue(val);
                    this.SendValid(request.RequestId, client);
                }
                else this.SendError(client, request.RequestId, "Invalid capability type");

            }


            else {
                this.SendError(client, request.RequestId, "No serveur implementation for request of type " + request.Type);
            }

        }
        private void SendResponse(WsResponse response, WebSocketClient client) {
            try {
                string responseText = JsonConvert.SerializeObject(response, this.serializationSetting);
                client.Send(responseText).ContinueWith((Task task) => { Log.Error("Error in " + this.GetType().Name + " when set value : " + task.Exception.Message); }, TaskContinuationOptions.OnlyOnFaulted);
            }
            catch (Exception ex) {
                Log.Error("WebSocketService Error when send response " + ex.Message);
            }

        }
        private void SendValid(string requestId, WebSocketClient client) {
            WsValidResponse response = new WsValidResponse() {
                RequestId = requestId
            };
            string responseText = JsonConvert.SerializeObject(response);
            client.Send(responseText).ContinueWith((Task task) => { Log.Error("Error in " + this.GetType().Name + " when set value : " + task.Exception.Message); }, TaskContinuationOptions.OnlyOnFaulted);
        }

        private void SendError(WebSocketClient client, string requestId, string errorMessage) {
            WsErrorResponse response = new WsErrorResponse() {
                RequestId = requestId,
                ErrorMessage = errorMessage
            };
            string responseText = JsonConvert.SerializeObject(response);
            client.Send(responseText).ContinueWith((Task task) => { Log.Error("Error in " + this.GetType().Name + " when set value : " + task.Exception.Message); }, TaskContinuationOptions.OnlyOnFaulted);
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
