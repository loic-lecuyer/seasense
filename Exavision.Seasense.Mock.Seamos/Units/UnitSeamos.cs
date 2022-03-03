using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Core.Network;
using Exavision.Seasense.Mock.Seamos.ViewModels;
using Exavision.Seasense.Protocols.Seamos;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
using Exavision.Seasense.Protocols.Seamos.Commands.Telemeter;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Spinnaker.Shared.Api;
using Exavision.Seasense.Spinnaker.Shared.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ReactiveUI;
using Serilog;
using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Exavision.Seasense.Mock.Seamos.Units {
    public class UnitSeamos : ViewModelBase {

        public double Pan { get => this.pan; set => this.RaiseAndSetIfChanged(ref pan, value); }

        public double Tilt { get => this.tilt; set => this.RaiseAndSetIfChanged(ref tilt, value); }
        public Values SpinnakerValues { get => this.spinnakerValues; set => this.RaiseAndSetIfChanged(ref spinnakerValues, value); }
        public bool IsGyrostabilizationEnabled { get => this.isGyrostabilizationEnabled; set => this.RaiseAndSetIfChanged(ref isGyrostabilizationEnabled, value); }

        private double pan;
        private double tilt;
        private bool isGyrostabilizationEnabled;
        private string ip = "127.0.0.1";
        private int port = 5000;
        private TcpCoreStringServer server;
        private SeamosStandardProtocol protocol;
        private double panSpeed = 0;
        private double tilSpeed = 0;
        private double degreePerSecond = 15;
        private IntRect thermalRoiZoom = null;

        private HttpListener spinnakerListener;
        private readonly string spinnakerUrlListen = "http://127.0.0.1:8000/";

        private readonly JsonSerializerSettings spinnakerjsonSerializerSettings;
        public UnitSeamos() {
            server = new TcpCoreStringServer();
            protocol = new SeamosStandardProtocol();
            IPEndPoint endpoint = new IPEndPoint(IPAddress.Parse(ip), port);
            server.OnMessageReceived += this.Server_OnMessageReceived;
            server.Start(endpoint, "\r\n");
            this.spinnakerjsonSerializerSettings = new JsonSerializerSettings() {
                TypeNameHandling = TypeNameHandling.Auto,
                ContractResolver = new DefaultContractResolver { NamingStrategy = new CamelCaseNamingStrategy() },
                SerializationBinder = new SerializationBinder()
            };
            this.CreateDefaultSpinnakerValues();
            Task.Factory.StartNew(LoopTurret);
            Task.Factory.StartNew(LoopDayCamera);


        }

        private async Task LoopDayCamera() {
            try {
                if (this.spinnakerListener == null) { this.spinnakerListener = new HttpListener(); }
                this.spinnakerListener.Prefixes.Add(spinnakerUrlListen);
                this.spinnakerListener.Start();
                this.spinnakerListener.BeginGetContext(new AsyncCallback(SpinnakerWebRequestCallback), this.spinnakerListener);
            }
            catch (Exception ex) {
                Log.Error("Error " + ex.Message);
            }


        }
        protected void SpinnakerWebRequestCallback(IAsyncResult result) {
            HttpListenerContext contextMjpeg = this.spinnakerListener.EndGetContext(result);
            this.spinnakerListener.BeginGetContext(new AsyncCallback(SpinnakerWebRequestCallback), this.spinnakerListener);
            this.SpinnakerProcessWebRequest(contextMjpeg);
        }

        private void SpinnakerProcessWebRequest(HttpListenerContext context) {
            string method = context.Request.HttpMethod.ToUpper();
            string url = context.Request.Url.ToString();
            if (method.Equals("POST")) {
                if (url.IndexOf("values") != -1) {
                    this.SpinnakerProcessSetValuesRequest(context);
                }
                else if (url.IndexOf("configuration") != -1) {
                    this.SpinnakerProcessSetConfigurationRequest(context);
                }
                else {
                    this.SpinnakerEndResponse(context);
                }
            }
            else if (method.Equals("GET")) {
                if (url.IndexOf("values") != -1) {
                    this.SpinnakerProcessGetValuesRequest(context);
                }
                else if (url.IndexOf("configuration") != -1) {
                    this.SpinnakerProcessGetConfigurationRequest(context);
                }

                else {
                    this.SpinnakerEndResponse(context);
                }
            }
            else {
                this.SpinnakerEndResponse(context);
            }
        }

        /// <summary>
        /// The ProcessGetConfigurationRequest.
        /// </summary>
        /// <param name="context">The context<see cref="HttpListenerContext"/>.</param>
        private void SpinnakerProcessGetConfigurationRequest(HttpListenerContext context) {
            /*
            GetConfigurationResponse response = new GetConfigurationResponse {
                Configuration = this.serviceProvider.ConfigurationService.LoadConfiguration()
            };
            string content = JsonConvert.SerializeObject(response, this.jsonSerializerSettings);
            byte[] data = Encoding.UTF8.GetBytes(content);
            context.Response.OutputStream.Write(data, 0, data.Length);
            context.Response.StatusCode = 200;
            context.Response.Close();
            */
            this.SpinnakerEndResponse(context, 500);
        }
        private Values spinnakerValues;
        private void CreateDefaultSpinnakerValues() {
            this.SpinnakerValues = new Values() {
                BlackLevel = new BlackLevel() { Value = 10 },
                ExposureTime = new ExposureTime() { Mode = ExposureTimeMode.Off, Value = 0 },
                Fps = 25,
                Gain = new Gain() { Mode = GainMode.Off, Value = 5, Type = "GainMode" },
                Gamma = new Gamma(),
                Quality = new Quality(),
                Type = "Values",
                Version = new Spinnaker.Shared.Models.Version(),
                WhiteBalance = new WhiteBalance(),
                Zoom = new Zoom() { Value = 1 }
            };
        }

        /// <summary>
        /// The ProcessGetValuesRequest.
        /// </summary>
        /// <param name="context">The context<see cref="HttpListenerContext"/>.</param>
        private void SpinnakerProcessGetValuesRequest(HttpListenerContext context) {
            GetValuesResponse response = new GetValuesResponse {
                Values = SpinnakerValues
            };

            string content = JsonConvert.SerializeObject(response, this.spinnakerjsonSerializerSettings);
            byte[] data = Encoding.UTF8.GetBytes(content);
            context.Response.OutputStream.Write(data, 0, data.Length);
            context.Response.StatusCode = 200;
            context.Response.Close();

        }

        /// <summary>
        /// The ProcessSetConfigurationRequest.
        /// </summary>
        /// <param name="context">The context<see cref="HttpListenerContext"/>.</param>
        private void SpinnakerProcessSetConfigurationRequest(HttpListenerContext context) {
            /*
            try {
                string content = new StreamReader(context.Request.InputStream).ReadToEnd();
                SetConfigurationRequest request = JsonConvert.DeserializeObject<SetConfigurationRequest>(content, this.jsonSerializerSettings);
                this.serviceProvider.ConfigurationService.SetConfiguration(request.Configuration);
                this.serviceProvider.CameraService.SetConfiguration(request.Configuration);
                context.Response.StatusCode = 200;
                context.Response.Close();
            }
            catch {
                this.EndResponse(context, 500);
            }
            */
            this.SpinnakerEndResponse(context, 500);
        }

        /// <summary>
        /// The ProcessSetValuesRequest.
        /// </summary>
        /// <param name="context">The context<see cref="HttpListenerContext"/>.</param>
        private void SpinnakerProcessSetValuesRequest(HttpListenerContext context) {

            try {

                string content = new StreamReader(context.Request.InputStream).ReadToEnd();

                SetValuesRequest request = JsonConvert.DeserializeObject<SetValuesRequest>(content, this.spinnakerjsonSerializerSettings);
                Log.Information("SpinnakerProcessSetValuesRequest Zoom " + request.Values.Zoom.Value);
                this.SpinnakerValues = request.Values;
                context.Response.StatusCode = 200;
                context.Response.Close();

                Log.Information("SpinnakerStreamer ProcessSetValuesRequest Zoom " + request.Values.Zoom.Value);
            }
            catch (Exception ex) {
                string log = "SpinnakerStreamer WebService " + ex.Message;
                Log.Error(log);
                this.SpinnakerEndResponse(context, 500);
            }


        }

        /// <summary>
        /// The EndResponse.
        /// </summary>
        /// <param name="context">The context<see cref="HttpListenerContext"/>.</param>
        /// <param name="code">The code<see cref="int"/>.</param>
        private void SpinnakerEndResponse(HttpListenerContext context, int code = 403) {
            context.Response.StatusCode = code;
            context.Response.Close();
        }
        private async Task LoopTurret() {
            while (true) {
                this.Pan += (this.panSpeed * this.degreePerSecond / 10);
                this.Pan = this.Pan % 360;
                this.Tilt += (this.tilSpeed * this.degreePerSecond / 10);
                await Task.Delay(100);
            }
        }

        private void Server_OnMessageReceived(object? sender, System.Tuple<TcpCoreStringClient, string> e) {
            byte[] data = e.Item2.HexStringToBytesArray();
            ISeamosCommand command = this.protocol.Deserialize(data);
            if (command is ITurretGetPositionExatrack2Absolute extatrackRequestPosition) {
                if (extatrackRequestPosition.MoveMode == Protocols.Seamos.Commands.Turret.MoveModeExatrack2.Absolute
                    && extatrackRequestPosition.PanTiltZoomMode == PtModeExatrack2.Ignore) {
                    ITurretGetPositionExatrack2Absolute res = this.protocol.Resolve<ITurretGetPositionExatrack2Absolute>(MaterialTarget.Turret);
                    res.Pan = this.Pan;
                    res.PanTiltZoomMode = PtModeExatrack2.Absolute;
                    res.Tilt = this.Tilt;
                    res.StabilizationState = isGyrostabilizationEnabled ? StabilizationStateExatrack2.On : StabilizationStateExatrack2.Off;
                    res.SystemTarget = SystemTarget.Computer;
                    this.SendCommand(res, e.Item1);
                }
                else if (extatrackRequestPosition.PanTiltZoomMode == PtModeExatrack2.Speed) {
                    this.IsGyrostabilizationEnabled = extatrackRequestPosition.StabilizationState == StabilizationStateExatrack2.On;
                    this.panSpeed = extatrackRequestPosition.PanSpeed;
                    this.tilSpeed = extatrackRequestPosition.TiltSpeed;
                    System.Diagnostics.Debug.WriteLine("Receive speed command " + extatrackRequestPosition.PanSpeed + " " + extatrackRequestPosition.TiltSpeed);
                }
            }
            else if (command == null) {
                System.Diagnostics.Debug.WriteLine("Receive null  command ");
            }
            else if (command is ICameraGetValuesRequest cameraGetValuesRequest) {
                ICameraGetValuesResponse res = this.protocol.Resolve<ICameraGetValuesResponse>(MaterialTarget.ThermalCamera);
                res.SystemTarget = SystemTarget.Computer;
                if (thermalRoiZoom == null) {
                    res.RoiZoomEnable = false;
                }
                else {
                    res.RoiZoomEnable = true;
                    res.RoiZoomX = this.thermalRoiZoom.X;
                    res.RoiZoomY = this.thermalRoiZoom.Y;
                    res.RoiZoomWidth = this.thermalRoiZoom.Width;
                    res.RoiZoomHeight = this.thermalRoiZoom.Height;
                }
                this.SendCommand(res, e.Item1);

            }
            else if (command is ITelemeterActionShootRequest TelemeterActionShootRequest) {
                Random rnd = new Random();
                ITelemeterActionShootResponse response = this.protocol.Resolve<ITelemeterActionShootResponse>(MaterialTarget.Telemeter);
                response.DistanceMetter = rnd.Next(50, 2000);
                response.SystemTarget = SystemTarget.Computer;
                this.SendCommand(response, e.Item1);
            }
            else throw new System.Exception("No implementation for command " + command.GetType().Name);


        }

        private void SendCommand(ISeamosCommand command, TcpCoreStringClient client) {
            byte[] data = this.protocol.Serialize(command);
            string text = data.ToHexString();
            client.Send(text);

        }

    }
}
