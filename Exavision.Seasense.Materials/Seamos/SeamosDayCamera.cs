using Exavision.Seasense.Server.Materials.Seamos.Capabilities.Camera.Gige;
using Exavision.Seasense.Server.Materials.Seamos.Settings;
using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Spinnaker.Shared.Api;
using Exavision.Seasense.Spinnaker.Shared.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Serilog;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Exavision.Seasense.Server.Materials.Seamos {
    public class SeamosDayCamera : DayCamera<SettingSeamosDayCamera, SeamosUnit> {

        private Values spinnakerValues;

        private string baseUrl = "http://127.0.0.1:8000";
        private string apiHttpAddress;
        private HttpClient client;
        private GetValuesRequest requestGetValues;
        private SetValuesRequest requestSetValues;
        public SeamosDayCamera(SeamosUnit unit) : base(unit) {
            this.DisplayName = "Seamos Day Camera";
            this.Capabilities.Add(new SeamosCameraGigeZoomAbsolutePositionCapability(this));
            this.Capabilities.Add(new SeamosCameraGigeZoomContinuousCapability(this));
            this.CreateDefaultSpinnakerValues();
            this.JsonSerializerSettings = new JsonSerializerSettings() {
                TypeNameHandling = TypeNameHandling.Auto,
                ContractResolver = new DefaultContractResolver {
                    NamingStrategy = new CamelCaseNamingStrategy()
                },
                SerializationBinder = new SerializationBinder()
            };
        }

        private void CreateDefaultSpinnakerValues() {
            this.spinnakerValues = new Values() {
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

        public override int ImageWidth { get => 1980; }
        public override int ImageHeight { get => 1080; }
        public Values SpinnakerValues { get => this.spinnakerValues; }
        public JsonSerializerSettings JsonSerializerSettings { get; }

        public override SettingSeamosDayCamera GetSetting(SettingSeamosDayCamera setting) {
            setting.baseUrl = this.baseUrl;
            return setting;
        }

        public override void SetSetting(SettingSeamosDayCamera setting) {
            this.baseUrl = setting.baseUrl;
            base.SetSetting(setting);
            Console.WriteLine("SeamosDayCamera SetSetting");
        }


        public async Task SendValues() {
            try {
                if (this.apiHttpAddress == null) {
                    var baseAddress = this.baseUrl;
                    if (baseAddress.EndsWith("/")) {
                        baseAddress = baseAddress.Substring(0, baseAddress.Length - 1);
                    }
                    if (!baseAddress.EndsWith("/values")) {
                        baseAddress += "/values";
                    }
                    this.apiHttpAddress = baseAddress;
                }
                string result = null;
                if (this.client == null) {
                    this.client = new HttpClient();
                    this.client.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json");
                }
                if (requestSetValues == null) {
                    requestSetValues = new SetValuesRequest() { Values = this.spinnakerValues };
                }
                Log.Information("Sending POST To Spinnaker");
                JsonSerializerSettings localJsonSerializerSettings = this.JsonSerializerSettings;
                string serializedContent = JsonConvert.SerializeObject(requestSetValues, localJsonSerializerSettings);
                HttpResponseMessage message = await this.client.PostAsync(this.apiHttpAddress, new StringContent(serializedContent, Encoding.UTF8, "application/json"));
                Log.Information("Sending POST To Spinnaker Finish");
                //result = await message.Content.ReadAsStringAsync();
            }
            catch (Exception ex) {
                Log.Error("Error when send values to spinnaker");
            }

        }
        public override List<PollingAction> GetPollingActions() {
            List<PollingAction> actions = new List<PollingAction>();

            actions.Add(new PollingAction() {
                Action = async () => {
                    try {
                        if (this.apiHttpAddress == null) {
                            var baseAddress = this.baseUrl;
                            if (baseAddress.EndsWith("/")) {
                                baseAddress = baseAddress.Substring(0, baseAddress.Length - 1);
                            }
                            if (!baseAddress.EndsWith("/values")) {
                                baseAddress += "/values";
                            }
                            this.apiHttpAddress = baseAddress;
                        }
                        string result = null;
                        if (this.client == null) {
                            this.client = new HttpClient();
                            this.client.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json");
                        }
                        if (requestGetValues == null) {
                            requestGetValues = new GetValuesRequest();
                        }
                        HttpResponseMessage message = await this.client.GetAsync(this.apiHttpAddress);
                        result = await message.Content.ReadAsStringAsync();
                        if (!String.IsNullOrEmpty(result)) {
                            GetValuesResponse response = JsonConvert.DeserializeObject<GetValuesResponse>(result, this.JsonSerializerSettings);
                            this.ProcessHarwareResponseValues(response);

                        }


                    }
                    catch (Exception ex) {
                        Log.Error("Error When send To Spinnaker " + this.apiHttpAddress + " : " + ex.Message);

                    }
                },
                Delay = 100

            });


            return actions;
        }

        private void ProcessHarwareResponseValues(GetValuesResponse response) {
            this.spinnakerValues.BlackLevel.Value = response.Values.BlackLevel.Value;
            this.spinnakerValues.ExposureTime.Mode = response.Values.ExposureTime.Mode;
            this.spinnakerValues.ExposureTime.Value = response.Values.ExposureTime.Value;
            this.spinnakerValues.Fps = response.Values.Fps;
            this.spinnakerValues.Gain.Mode = response.Values.Gain.Mode;
            this.spinnakerValues.Gain.Type = response.Values.Gain.Type;
            this.spinnakerValues.Gain.Value = response.Values.Gain.Value;
            this.spinnakerValues.Gamma.Value = response.Values.Gamma.Value;
            this.spinnakerValues.Quality.Value = response.Values.Quality.Value;
            this.spinnakerValues.Type = response.Values.Type;
            this.spinnakerValues.Version = response.Values.Version;
            this.spinnakerValues.WhiteBalance.Mode = response.Values.WhiteBalance.Mode;
            this.spinnakerValues.WhiteBalance.Value = response.Values.WhiteBalance.Value;
            this.spinnakerValues.Zoom.Value = response.Values.Zoom.Value;
            this.Capabilities.ForEach((ICapability cap) => {
                if (cap is ISeamosGigeCapability seamosGigeCapability) {
                    seamosGigeCapability.ProcessHarwareResponseValues(response.Values);
                }
            });
        }
    }
}
