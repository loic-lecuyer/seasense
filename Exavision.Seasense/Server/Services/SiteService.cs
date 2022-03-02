using Exavision.Seasense.Server.Materials.Seamos;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
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
            this.site.Units.ForEach((IUnit unit) => {
                unit.Start();
            });
            // To get new capability or material implemented beetween version
            settingSite = this.site.GetSetting();
            this.SaveSetting(settingSite);
        }

        public Type GetTypeFromSetting(Type settingType) {

            Type[] types = typeof(SeamosUnit).Assembly.GetTypes();
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

        public void SaveSetting(SettingSite settingSite) {
            JsonSerializerSettings JsonSerializerSettings = new JsonSerializerSettings() {
                TypeNameHandling = TypeNameHandling.Auto,
                ContractResolver = new DefaultContractResolver {
                    NamingStrategy = new CamelCaseNamingStrategy()
                },

                SerializationBinder = new SerializationBinder()
            };
            JsonSerializerSettings.Converters.Add(new StringEnumConverter());

            string content = JsonConvert.SerializeObject(settingSite, JsonSerializerSettings);
            File.WriteAllText(CONFIGURATION_FILE, content);
        }

        public void Stop() {
            this.site.Units.ForEach((IUnit unit) => {
                unit.Stop();
            });
        }

        public IUnit FindUnitById(string unitId) {
            return (from u in this.site.Units where u.Id.Equals(unitId) select u).FirstOrDefault();
        }

        public SiteState GetState() {
            return this.site.GetState();
        }

        public IMaterial FindMaterialById(string materialId) {
            IMaterial result = null;
            this.site.Units.ForEach((IUnit unit) => {
                if (unit.Id.Equals(materialId)) {
                    result = unit;
                }
                else {
                    foreach (IMaterial material in unit.Materials) {
                        if (material.Id.Equals(materialId)) {
                            result = material;
                            break;
                        }
                    }
                }
            });
            return result;
        }
    }
}
