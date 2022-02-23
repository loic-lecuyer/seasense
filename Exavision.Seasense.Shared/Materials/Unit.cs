using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Unit<S> : IUnit where S : SettingMaterial,new() {
        public List<IMaterial> Materials { get; set; } = new List<IMaterial>();
        public List<ICapability> Capabilities { get; set; } = new List<ICapability>();
        public virtual S GetSetting() {
            S setting = new S();
            foreach (ICapability capability in this.Capabilities) {
                SettingCapability settingCapability = capability.GetSettingCapability();
                setting.Capabilities.Add(settingCapability);
            }
            foreach (IMaterial material in this.Materials) {
                SettingMaterial settingMaterial = material.GetSettingMaterial();
                setting.Materials.Add(settingMaterial);
            }
            return setting;
        }
        public virtual void SetSetting(S setting) {
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
            foreach (ICapability capability in this.Capabilities) {
                SettingCapability settingCapability = capability.GetSettingCapability();
                settingMaterial.Capabilities.Add(settingCapability);
            }
            foreach (IMaterial matertial in this.Materials) {
                SettingMaterial settingMaterialChild = matertial.GetSettingMaterial();
                settingMaterial.Materials.Add(settingMaterialChild);

            }

            return settingMaterial;
        }



    }
}
