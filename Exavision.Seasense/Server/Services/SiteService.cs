using Exavision.Seasense.Server.Materials.Seamos;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Settings;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.IO;
using System.Linq;

namespace Exavision.Seasense.Server.Services {

    public class SiteService : ISiteService {
        const string CONFIGURATION_FILE = "Configuration.json";
        private Site site;
        public void Start() {
            SettingSite settingSite = this.LoadSetting();
            this.site = CreateInstanceFromSetting(settingSite);
        }

        public Type GetTypeFromSetting(Type settingType) {

            Type[] types = this.GetType().Assembly.GetTypes();
            foreach (Type type in types) {
                if (typeof(IMaterial).IsAssignableFrom(type) && !type.IsAbstract && !type.IsInterface && type.IsClass) {
                    if (type.BaseType.GenericTypeArguments.Length > 0 && type.BaseType.GenericTypeArguments.Contains(settingType)) {
                        return type;
                    }
                }
            }
            return null;

        }

        private Site CreateInstanceFromSetting(SettingSite settingSite) {
            Site site = new Site();
            settingSite.Units.ForEach((SettingMaterial settingUnit) => {
                Type unitType = this.GetTypeFromSetting(settingUnit.GetType());
                IUnit unit = (IUnit)Activator.CreateInstance(unitType);
                site.Units.Add(unit);
            });
            site.SetSetting(settingSite);
            return site;
        }

        public SettingSite LoadSetting() {
            if (File.Exists(CONFIGURATION_FILE)) {
                string content = File.ReadAllText(CONFIGURATION_FILE);
                JsonSerializerSettings JsonSerializerSettings = new JsonSerializerSettings() {
                    TypeNameHandling = TypeNameHandling.Auto,
                    ContractResolver = new DefaultContractResolver {
                        NamingStrategy = new CamelCaseNamingStrategy()
                    },
                    SerializationBinder = new SerializationBinder()
                };
                return JsonConvert.DeserializeObject<SettingSite>(content, JsonSerializerSettings);
            }
            else {
                Site site = new Site();
                SeamosUnit unit = new SeamosUnit();
                site.Units.Add(unit);
                SettingSite settingSite = site.GetSetting();
                this.SaveSetting(settingSite);
                return settingSite;
            }
        }

        private void SaveSetting(SettingSite settingSite) {
            JsonSerializerSettings JsonSerializerSettings = new JsonSerializerSettings() {
                TypeNameHandling = TypeNameHandling.Auto,
                ContractResolver = new DefaultContractResolver {
                    NamingStrategy = new CamelCaseNamingStrategy()
                },
                SerializationBinder = new SerializationBinder()
            };
            string content = JsonConvert.SerializeObject(settingSite, JsonSerializerSettings);
            File.WriteAllText(CONFIGURATION_FILE, content);
        }

        public void Stop() {

        }


    }
}
