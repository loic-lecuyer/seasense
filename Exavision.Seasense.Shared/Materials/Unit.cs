using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Unit<S> : IUnit where S : SettingMaterial, new() {
        public string DisplayName { get; protected set; }
        public string Id { get; private set; } = Guid.NewGuid().ToString();
        public List<IMaterial> Materials { get; set; } = new List<IMaterial>();
        public List<ICapability> Capabilities { get; set; } = new List<ICapability>();

        public MaterialType MaterialType => MaterialType.Unit;

        public virtual S GetSetting() {
            S setting = new S();
            setting.MaterialType = this.MaterialType;
            setting.Id = this.Id;
            setting.DisplayName = this.DisplayName;
            foreach (ICapability capability in this.Capabilities) {
                SettingCapability settingCapability = capability.GetSettingCapability();
                setting.Capabilities.Add(settingCapability);
            }
            foreach (IMaterial material in this.Materials) {
                SettingMaterial settingMaterial = material.GetSettingMaterial();
                setting.Materials.Add(settingMaterial);
            }
            setting = this.GetSetting(setting);
            return setting;
        }
        public abstract S GetSetting(S setting);
        public virtual void SetSetting(S setting) {
            this.Id = setting.Id;
            this.DisplayName = setting.DisplayName;
            foreach (ICapability capability in this.Capabilities) {
                if (capability.GetType().BaseType.GenericTypeArguments.Length > 0) {
                    SettingCapability settingCapability = (from sm in setting.Capabilities where capability.GetType().BaseType.GenericTypeArguments.Contains(sm.GetType()) select sm).FirstOrDefault();
                    MethodInfo setSettingMethod = capability.GetType().GetMethod("SetSetting", new Type[] { settingCapability.GetType() });
                    setSettingMethod.Invoke(capability, new object[] { settingCapability });
                }
            }
            foreach (IMaterial material in this.Materials) {
                if (material.GetType().BaseType.GenericTypeArguments.Length > 0) {
                    SettingMaterial settingMaterial = (from sm in setting.Materials where material.GetType().BaseType.GenericTypeArguments.Contains(sm.GetType()) select sm).FirstOrDefault();
                    MethodInfo setSettingMethod = material.GetType().GetMethod("SetSetting", new Type[] { settingMaterial.GetType() });
                    setSettingMethod.Invoke(material, new object[] { settingMaterial });
                }
            }

        }
        public SettingMaterial GetSettingMaterial() {
            SettingMaterial settingMaterial = this.GetSetting();
            settingMaterial.Id = this.Id;
            return settingMaterial;
        }

        public abstract void Start();

        public abstract void Stop();

        public IMaterial GetMaterialById(string materialId) {
            return (from m in this.Materials where m.Id.Equals(materialId) select m).FirstOrDefault();
        }
        public T GetCapability<T>() where T : ICapability {
            return (T)(from c in this.Capabilities where typeof(T).IsAssignableFrom(c.GetType()) select c).FirstOrDefault();
        }
        public virtual MaterialState GetState() {
            MaterialState materialState = new MaterialState();
            materialState.Id = this.Id;
            this.Materials.ForEach((IMaterial material) => {
                MaterialState materialStateChild = material.GetState();
                materialState.Materials.Add(materialState);
            });
            this.Capabilities.ForEach((ICapability capability) => {
                CapabilityState capabilityState = capability.GetState();
                materialState.Capabilies.Add(capabilityState);
            });
            return materialState;
        }


    }
}
