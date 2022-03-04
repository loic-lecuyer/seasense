using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Protocols.Seamos.Commands.Telemeter;
using Exavision.Seasense.Shared.Capabilities.LazerMeasurement;
using Exavision.Seasense.Shared.Settings;
using Exavision.Seasense.Shared.States;
using Exavision.Seasense.Shared.States.LazerMeasurement;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Exavision.Seasense.Materials.Seamos.Capabilities.LazerMeasurement {
    public class SeamosLazerMeasurementShootCapability : LazerMeasurementShootCapability, ISeamosCapability {
        private readonly SeamosUnit unit;
        public Nullable<int> ErrorCode { get; private set; }
        public Nullable<Double> LastShootDistance { get; private set; }
        public Nullable<DateTime> LastShootDate { get; private set; }

        private CancellationTokenSource autoOffCanceller;

        public SeamosLazerMeasurementShootCapability(SeamosUnit unit) {
            this.unit = unit;
        }

        public override void ShootMeasurement() {
            if (!this.IsOn) {

                ITelemeterSetOnRequest commandOnOff = this.unit.Protocol.Resolve<ITelemeterSetOnRequest>(MaterialTarget.Telemeter);
                this.unit.Client.Send(commandOnOff);
                this.IsOn = true;
            }
            ITelemeterActionShootRequest request = this.unit.Protocol.Resolve<ITelemeterActionShootRequest>(MaterialTarget.Telemeter);
            this.unit.Client.Send(request);
            if (autoOffCanceller != null) autoOffCanceller.Cancel();
            autoOffCanceller = new CancellationTokenSource();
            Task.Factory.StartNew(AutoOff, autoOffCanceller.Token);
        }

        private async Task AutoOff() {
            await Task.Delay(3000, autoOffCanceller.Token);
            if (!autoOffCanceller.IsCancellationRequested) {
                ITelemeterSetOnRequest commandOnOff = this.unit.Protocol.Resolve<ITelemeterSetOnRequest>(MaterialTarget.Telemeter);
                this.unit.Client.Send(commandOnOff);
                this.IsOn = false;
            }
        }

        public void ProcessHardwareResponse(ISeamosCommand response) {
            if (response is ITelemeterActionShootResponse) {
                this.LastShootDistance = (response as ITelemeterActionShootResponse).DistanceMetter;
                this.LastShootDate = DateTime.Now;
                this.ErrorCode = null;
            }
            if (response is ITelemeterErrorResponse) {
                this.ErrorCode = (response as ITelemeterErrorResponse).VectronixErrorCode;
            }
        }
        public override CapabilityState GetState() {
            LazerMeasurementShootState state = new LazerMeasurementShootState();
            state.Id = this.Id;
            state.ErrorCode = this.ErrorCode.HasValue ? "Error #" + this.ErrorCode.Value : null;
            state.LastShootDate = this.LastShootDate;
            state.IsOn = this.IsOn;
            state.LastShootDistance = this.LastShootDistance;
            return state;
        }

        public override SettingCapabilityEmpty GetSetting(SettingCapabilityEmpty setting) {
            SettingCapabilityEmpty set = base.GetSetting(setting);
            return set;
        }
    }
}
