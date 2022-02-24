﻿using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Material<S> : IMaterial where S : SettingMaterial, new() {

        public string DisplayName { get; protected set; }
        public string Id { get; private set; } = Guid.NewGuid().ToString();
        public List<IMaterial> Materials { get; set; } = new List<IMaterial>();
        public List<ICapability> Capabilities { get; set; } = new List<ICapability>();



        public virtual S GetSetting() {
            S setting = new S();
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
            setting = GetSetting(setting);
            return setting;
        }
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

        public abstract S GetSetting(S setting);
        public SettingMaterial GetSettingMaterial() {
            SettingMaterial SettingMaterial = this.GetSetting();
            SettingMaterial.Id = this.Id;
            return SettingMaterial;
        }
    }
}
