using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Materials;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Settings;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Exavision.Seasense.Server.Services {
    public class SiteService : ISiteService {
        private Site site;
        public void Start() {
            SettingSite settingSite = this.LoadSetting();
            this.site = CreateInstanceFromSetting(settingSite);
            /*
        Site site = new Site();
        site.Units.Add(new SeamosUnit());
        SettingSite settingSite = this.GetSetting(site);
        JsonSerializerSettings JsonSerializerSettings = new JsonSerializerSettings() {
            TypeNameHandling = TypeNameHandling.Auto,
            ContractResolver = new DefaultContractResolver {
                NamingStrategy = new CamelCaseNamingStrategy()
            },
            SerializationBinder = new SerializationBinder()
        };

        string content = JsonConvert.SerializeObject(settingSite, JsonSerializerSettings);
        SettingSite settingSiteBack = JsonConvert.DeserializeObject<SettingSite>(content, JsonSerializerSettings);
        using (FileStream fs = new FileStream("Configuration.json", FileMode.Create)) {

            byte[] data = System.Text.Encoding.UTF8.GetBytes(content);
            fs.Write(data);

        }
        Console.WriteLine(content);
            */
            /*
            JsonSerializer serializer = new JsonSerializer {
                TypeNameHandling = TypeNameHandling.Auto,
                ContractResolver = new DefaultContractResolver {
                    NamingStrategy = new CamelCaseNamingStrategy()
                },
                SerializationBinder = this.serializationService.JsonSerializerSettings.SerializationBinder
            };
            */
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
                MethodInfo setSettingMethod = unitType.GetMethod("SetSetting", new Type[] { settingUnit.GetType() });
                site.Units.Add(unit);
                setSettingMethod.Invoke(unit, new object[] { settingUnit });
                settingUnit.Materials.ForEach((SettingMaterial settingMaterial) => {

                    settingUnit.Capabilities.ForEach((SettingCapability settingCapability) => {
                        ICapability capability = (from c in unit.Capabilities
                                                  where c.GetType().BaseType.GenericTypeArguments.Length > 0 &&
                                                  c.GetType().BaseType.GenericTypeArguments.Contains(settingCapability.GetType())
                                                  select c).FirstOrDefault();
                        MethodInfo setSettingMethod = capability.GetType().GetMethod("SetSetting", new Type[] { settingCapability.GetType() });
                        setSettingMethod.Invoke(capability, new object[] { settingCapability });
                    });
                    //Type materialType = this.GetTypeFromSetting(settingMaterial.GetType());
                    //IMaterial material = (IMaterial)Activator.CreateInstance(materialType);
                    IMaterial material = (from m in unit.Materials
                                          where m.GetType().BaseType.GenericTypeArguments.Length > 0 &&
                                          m.GetType().BaseType.GenericTypeArguments.Contains(settingMaterial.GetType())
                                          select m).FirstOrDefault();
                    MethodInfo setSettingMethod = material.GetType().GetMethod("SetSetting", new Type[] { settingMaterial.GetType() });
                    setSettingMethod.Invoke(material, new object[] { settingMaterial });
                    unit.Materials.Add(material);
                    settingMaterial.Capabilities.ForEach((SettingCapability settingCapability) => {
                        ICapability capability = (from c in material.Capabilities
                                                  where c.GetType().BaseType.GenericTypeArguments.Length > 0 &&
                                                  c.GetType().BaseType.GenericTypeArguments.Contains(settingCapability.GetType())
                                                  select c).FirstOrDefault();
                        MethodInfo setSettingMethod = capability.GetType().GetMethod("SetSetting", new Type[] { settingCapability.GetType() });
                        setSettingMethod.Invoke(capability, new object[] { settingCapability });
                    });
                });
            });
            site.SetSetting(settingSite);
            return site;
        }

        private SettingSite LoadSetting() {
            if (File.Exists("Configuration.json")) {
                string content = File.ReadAllText("Configuration.json");
                JsonSerializerSettings JsonSerializerSettings = new JsonSerializerSettings() {
                    TypeNameHandling = TypeNameHandling.Auto,
                    ContractResolver = new DefaultContractResolver {
                        NamingStrategy = new CamelCaseNamingStrategy()
                    },
                    SerializationBinder = new SerializationBinder()
                };
                return JsonConvert.DeserializeObject<SettingSite>(content, JsonSerializerSettings);

            }
            else { return new SettingSite(); }
        }

        private SettingSite GetSetting(Site site) {
            SettingSite settingSite = site.GetSetting();
            site.Units.ForEach((IUnit unit) => {

                SettingMaterial settingUnit = unit.GetSettingMaterial();
                unit.Capabilities.ForEach((ICapability capability) => {
                    SettingCapability settingCapability = capability.GetSettingCapability();
                    settingUnit.Capabilities.Add(settingCapability);
                });
                unit.Materials.ForEach((IMaterial material) => {
                    SettingMaterial settingMaterial = material.GetSettingMaterial();
                    material.Capabilities.ForEach((ICapability capability) => {
                        SettingCapability settingCapability = capability.GetSettingCapability();
                        settingMaterial.Capabilities.Add(settingCapability);
                    });
                    settingUnit.Materials.Add(settingMaterial);
                    this.RecurseGetMaterialSetting(material, settingMaterial);


                });

                settingSite.Units.Add(settingUnit);
            });
            return settingSite;
            /*

            site.Units.ForEach((Unit unit) => {
                SettingUnit settingUnit = unit.GetSetting();
                unit.Capabilies.ForEach((ICapability capability) => {
                    SettingCapability settingCapability = capability.GetSetting();
                    settingUnit.Capabilities.Add(settingCapability);
                });
                settingSite.Units.Add(settingUnit);
                unit.Materials.ForEach((Material material) => {
                    SettingMaterial settingMaterial = material.GetSetting();
                    material.Capabilies.ForEach((ICapability capability) => {
                        SettingCapability settingCapability = capability.GetSetting();
                        settingMaterial.Capabilities.Add(settingCapability);
                    });
                    settingUnit.Materials.Add(settingMaterial);
                    this.RecurseGetMaterialSetting(material, settingMaterial);
                });
            });
            return settingSite;
            */
        }

        private void RecurseGetMaterialSetting(IMaterial material, SettingMaterial settingMaterial) {

            material.Materials.ForEach((IMaterial materialChild) => {
                SettingMaterial settingMaterialChild = materialChild.GetSettingMaterial();
                materialChild.Capabilities.ForEach((ICapability capability) => {
                    SettingCapability settingCapability = capability.GetSettingCapability();
                    settingMaterialChild.Capabilities.Add(settingCapability);
                });
                settingMaterial.Materials.Add(settingMaterialChild);
                this.RecurseGetMaterialSetting(materialChild, settingMaterialChild);
            });

        }

        public void Stop() {

        }
    }
}
