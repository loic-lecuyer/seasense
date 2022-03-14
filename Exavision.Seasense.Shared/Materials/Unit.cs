using Exavision.Seasense.Shared.Capabilities;
using Exavision.Seasense.Shared.Models;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace Exavision.Seasense.Shared.Materials {
    public abstract class Unit<S> : IUnit where S : SettingMaterial, new() {
        public string DisplayName { get; protected set; }
        public string Id { get; private set; } = Guid.NewGuid().ToString();
        public List<IMaterial> Materials { get; set; } = new List<IMaterial>();
        public List<ICapability> Capabilities { get; set; } = new List<ICapability>();
        private bool isPollingEnabled = true;
        public MaterialType MaterialType => MaterialType.Unit;

     

        public virtual S GetSetting() {
            S setting = new S();
            setting.MaterialType = this.MaterialType;
            setting.Id = this.Id;
            setting.ImplementationType = this.GetType().Name;
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


            foreach (IMaterial material in this.Materials) {

               
                SettingMaterial settingMateiral = (from sm in setting.Materials where sm.ImplementationType.Equals(material.GetType().Name) select sm).FirstOrDefault();
                MethodInfo setsettingMethod = material.GetType().GetMethod("SetSetting", new Type[] { settingMateiral.GetType() });
                setsettingMethod.Invoke(material, new object[] { settingMateiral });
            }
            foreach (ICapability capability in this.Capabilities) {

                SettingCapability settingCapability = null;
                //(from sm in setting.Capabilities where sm.ImplementationType.Equals(capability.GetType().Name) select sm).FirstOrDefault();
                foreach (SettingCapability settingCap in setting.Capabilities) {
                    if (settingCap.ImplementationType.Equals(capability.GetType().Name)) {
                        settingCapability = settingCap;
                    }
                }

                MethodInfo setSettingMethod = capability.GetType().GetMethod("SetSetting", new Type[] { settingCapability.GetType() });
                setSettingMethod.Invoke(capability, new object[] { settingCapability });
            }
        }
        public SettingMaterial GetSettingMaterial() {
            SettingMaterial settingMaterial = this.GetSetting();
            settingMaterial.Id = this.Id;
            return settingMaterial;
        }
        private CancellationTokenSource pollingCanceller;
        public virtual void Start() {
            this.pollingCanceller = new CancellationTokenSource();
            Task.Factory.StartNew(PollingLoop, this.pollingCanceller.Token);

        }
        private readonly Dictionary<PollingAction, DateTime> pollingActionDates = new Dictionary<PollingAction, DateTime>();

        public void SetPollingState(bool isPollingEnabled) {
            this.isPollingEnabled = isPollingEnabled;
        }
        private async Task PollingLoop() {
            pollingActionDates.Clear();
            List<PollingAction> actions = new List<PollingAction>();
            actions.AddRange(this.GetPollingActions());
            this.Capabilities.ForEach((ICapability capabilities) => {
                actions.AddRange(capabilities.GetPollingActions());
            });
            this.Materials.ForEach((IMaterial material) => {
                actions.AddRange(material.GetPollingActions());
                material.Capabilities.ForEach((ICapability capabilities) => {
                    actions.AddRange(capabilities.GetPollingActions());
                });
            });

            // Add polling action to dictionary if not exist
            foreach (PollingAction action in actions) {
                pollingActionDates.Add(action, DateTime.Now);
            }
            while (!pollingCanceller.IsCancellationRequested) {

                try {
                    if (this.isPollingEnabled) {
                        DateTime now = DateTime.Now;
                        List<KeyValuePair<PollingAction, DateTime>> actionToRuns = (from a in pollingActionDates where (now - a.Value).TotalMilliseconds > a.Key.Delay orderby (now - a.Value).TotalMilliseconds descending select a).ToList();
                        if (actionToRuns.Count > 0) {

                            DateTime nextDate = (from a in pollingActionDates where (now - a.Value).TotalMilliseconds < a.Key.Delay orderby (now - a.Value).TotalMilliseconds ascending select a.Value).FirstOrDefault();
                            TimeSpan deltaToNext = now - nextDate;
                            int waitBeetween = (int)(deltaToNext.TotalMilliseconds / actionToRuns.Count);
                            if (waitBeetween < 1) waitBeetween = 1;
                            Log.Information("Wait beetween polling " + waitBeetween + " ms");
                            foreach (KeyValuePair<PollingAction, DateTime> act in actionToRuns) {
                                act.Key.Action.Invoke();
                                pollingActionDates[act.Key] = DateTime.Now;
                                await Task.Delay(waitBeetween);
                            }
                        }
                    } else await Task.Delay(500);


                } catch (Exception ex) {
                    Log.Error("Critical error in polling loop " + ex.Message);
                    throw;
                }
            }
        }

        public virtual void Stop() {
            this.pollingCanceller.Cancel();
        }

        public IMaterial GetMaterialById(string materialId) {
            return (from m in this.Materials where m.Id.Equals(materialId) select m).FirstOrDefault();
        }

        public IMaterial GetMaterial<T>() where T : IMaterial {
            return (from m in this.Materials where m is T select m).FirstOrDefault();
        }
        public T GetCapability<T>() where T : ICapability {
            return (T)(from c in this.Capabilities where typeof(T).IsAssignableFrom(c.GetType()) select c).FirstOrDefault();
        }
        public virtual MaterialState GetState() {
            UnitState unitState = new UnitState();
            unitState.Id = this.Id;
            this.Materials.ForEach((IMaterial material) => {
                MaterialState materialStateChild = material.GetState();
                unitState.Materials.Add(materialStateChild);
            });
            this.Capabilities.ForEach((ICapability capability) => {
                CapabilityState capabilityState = capability.GetState();
                unitState.Capabilities.Add(capabilityState);
            });
            return unitState;
        }
        public ICapability GetCapabilityById(string capabilityId) {
            return (from c in this.Capabilities where c.Id.Equals(capabilityId) select c).FirstOrDefault();
        }
        public virtual List<PollingAction> GetPollingActions() {
            return new List<PollingAction>();
        }
    }
}
