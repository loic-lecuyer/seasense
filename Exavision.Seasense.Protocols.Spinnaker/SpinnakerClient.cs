using Exavision.Seasense.Protocols.Spinnaker.Api;
using Exavision.Seasense.Protocols.Spinnaker.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Serilog;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Exavision.Seasense.Protocols.Spinnaker {
    public class SpinnakerClient {
        private string baseUrl;
        private readonly JsonSerializerSettings JsonSerializerSettings;
        private string apiHttpAddress;
        private HttpClient client;
        private GetValuesRequest requestGetValues;
        private SetValuesRequest requestSetValues;
        private bool hasConnectionError = false;
        public bool IsConnected { get { return !this.hasConnectionError; } }

        public string BaseUrl { get => this.baseUrl; set => this.baseUrl = value; }

        public SpinnakerClient() {

            this.JsonSerializerSettings = new JsonSerializerSettings() {
                TypeNameHandling = TypeNameHandling.Auto,
                ContractResolver = new DefaultContractResolver {
                    NamingStrategy = new CamelCaseNamingStrategy()
                },
                SerializationBinder = new SerializationBinder()
            };
        }

        public async Task<Values> GetValues() {
            try {
                if (String.IsNullOrEmpty(this.BaseUrl)) return null;
                if (this.apiHttpAddress == null) {
                    var baseAddress = this.BaseUrl;
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
                    this.hasConnectionError = false;
                    return response.Values;

                }


            }
            catch (Exception ex) {
                Log.Error("Error When send To Spinnaker " + this.apiHttpAddress + " : " + ex.Message);
                this.hasConnectionError = true;

            }
            return null;
        }

        public async Task SetValues(Values values) {
            try {
                if (this.apiHttpAddress == null) {
                    var baseAddress = this.BaseUrl;
                    if (baseAddress.EndsWith("/")) {
                        baseAddress = baseAddress.Substring(0, baseAddress.Length - 1);
                    }
                    if (!baseAddress.EndsWith("/values")) {
                        baseAddress += "/values";
                    }
                    this.apiHttpAddress = baseAddress;
                }

                if (this.client == null) {
                    this.client = new HttpClient();
                    this.client.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json");
                }
                if (requestSetValues == null) {
                    requestSetValues = new SetValuesRequest() { Values = values };
                }
                Log.Information("Sending POST To Spinnaker");
                JsonSerializerSettings localJsonSerializerSettings = this.JsonSerializerSettings;
                string serializedContent = JsonConvert.SerializeObject(requestSetValues, localJsonSerializerSettings);
                HttpResponseMessage message = await this.client.PostAsync(this.apiHttpAddress, new StringContent(serializedContent, Encoding.UTF8, "application/json"));
                Log.Information("Sending POST To Spinnaker Finish");
                this.hasConnectionError = false;
                //result = await message.Content.ReadAsStringAsync();
            }
            catch (Exception ex) {
                Log.Error("Error when send values to spinnaker " + ex.Message);
                this.hasConnectionError = true;
            }

        }
    }
}
