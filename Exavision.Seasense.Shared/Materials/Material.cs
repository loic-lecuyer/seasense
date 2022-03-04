using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Material<S, U> : IMaterial where S : SettingMaterial, new() where U : IUnit, new() {
        private readonly U unit;

        public string DisplayName { get; protected set; }
        public string Id { get; private set; } = Guid.NewGuid().ToString();
        public List<IMaterial> Materials { get; set; } = new List<IMaterial>();
        public List<ICapability> Capabilities { get; set; } = new List<ICapability>();

        public U Unit => this.unit;

        public Material(U unit) {
            this.unit = unit;
        }

        public virtual S GetSetting() {
            S setting = new S();
            setting.Id = this.Id;
            setting.DisplayName = this.DisplayName;
            setting.ImplementationType = this.GetType().Name;


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


            foreach (IMaterial material in this.Materials) {

                SettingMaterial settingMateiral = (from sm in setting.Materials where sm.ImplementationType.Equals(material.GetType().Name) select sm).FirstOrDefault();
                MethodInfo setsettingMethod = material.GetType().GetMethod("SetSetting", new Type[] { settingMateiral.GetType() });
                setsettingMethod.Invoke(material, new object[] { settingMateiral });
            }
            foreach (ICapability capability in this.Capabilities) {

                SettingCapability settingCapability = (from sm in setting.Capabilities where sm.ImplementationType.Equals(capability.GetType().Name) select sm).FirstOrDefault();
                if (settingCapability != null) {
                    MethodInfo setSettingMethod = capability.GetType().GetMethod("SetSetting", new Type[] { settingCapability.GetType() });
                    setSettingMethod.Invoke(capability, new object[] { settingCapability });
                }

            }



        }

        public abstract S GetSetting(S setting);
        public SettingMaterial GetSettingMaterial() {
            SettingMaterial SettingMaterial = this.GetSetting();
            SettingMaterial.Id = this.Id;
            return SettingMaterial;
        }

        public virtual void Start() { }
        public virtual void Stop() { }

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
                materialState.Capabilities.Add(capabilityState);
            });
            return materialState;
        }

        public virtual List<PollingAction> GetPollingActions() {
            return new List<PollingAction>();
        }

        public ICapability GetCapabilityById(string capabilityId) {
            return (from c in this.Capabilities where c.Id.Equals(capabilityId) select c).FirstOrDefault();
        }
    }
}
