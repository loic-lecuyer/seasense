namespace Exavision.Seasense.Protocols.Seamos {
    using Exavision.Seasense.Protocols.Seamos.Commands;
    using Exavision.Seasense.Protocols.Seamos.Commands.Camera;
    using Exavision.Seasense.Protocols.Seamos.Commands.ElectronicCard;
    using Exavision.Seasense.Protocols.Seamos.Commands.InertialMeasurement;
    using Exavision.Seasense.Protocols.Seamos.Commands.Telemeter;
    using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
    using Exavision.Seasense.Protocols.Seamos.Standard.Camera;
    using Exavision.Seasense.Protocols.Seamos.Standard.ElectronicCard;
    using Exavision.Seasense.Protocols.Seamos.Standard.InertialMeasurement;
    using Exavision.Seasense.Protocols.Seamos.Standard.Telemeter;
    using Exavision.Seasense.Protocols.Seamos.Standard.Turret;

    /// <summary>
    /// Defines the <see cref="SeamosStandardProtocol" />.
    /// </summary>
    public class SeamosStandardProtocol : SeamosProtocol {
        /// <summary>
        /// Gets the ProtocolDescription.
        /// </summary>
        public override string ProtocolDescription => "SeamosStandardProtocol";

        /// <summary>
        /// Initializes a new instance of the <see cref="SeamosStandardProtocol"/> class.
        /// </summary>
        public SeamosStandardProtocol() : base() {
            // Commandes tourelle
            this.RegisterType<SeamosTurretAbsolutePositionExatrack2Request, ITurretSetPositionExatrack2Absolute>(MaterialTarget.Turret);
            this.RegisterType<SeamosTurretAbsolutePositionExatrack2Response, ITurretGetPositionExatrack2Absolute>(MaterialTarget.Turret);

            // Commandes caméra thermique
            this.RegisterType<SeamosElectronicCardGetHardwareIdRequest, IElectronicCardGetHardwareIdRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosElectronicCardGetHardwareIdResponse, IElectronicCardGetHardwareIdResponse>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosElectronicCardGetSoftwareVersionRequest, IElectronicCardGetSoftwareVersionRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosElectronicCardGetSoftwareVersionResponse, IElectronicCardGetSoftwareVersionResponse>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetValuesRequest, ICameraGetValuesRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetValuesResponse, ICameraGetValuesResponse>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetContrastRequest, ICameraSetContrastRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetLuminosityRequest, ICameraSetLuminosityRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetGammaRequest, ICameraSetGammaRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetGammaEnabledRequest, ICameraSetGammaEnabledRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetQualityRequest, ICameraSetQualityRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetPolarityRequest, ICameraSetPolarityRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetReticuleModeRequest, ICameraSetReticuleModeRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetReticuleEnabedRequest, ICameraSetReticuleEnabedRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetColorModeRequest, ICameraSetColorModeRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetZoneEqualizationEnabledRequest, ICameraSetZoneEqualizationEnabledRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetZoneEqualizationRequest, ICameraSetZoneEqualizationRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetZoneFocusRequest, ICameraSetZoneFocusRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetZoneFocusRequesResponse, ICameraGetZoneFocusRequestResponse>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetZoneZoomEnabledRequest, ICameraSetZoneZoomEnabledRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetZoneZoomRequest, ICameraSetZoneZoomRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetEqualizationHistoVisibilityRequest, ICameraSetEqualizationHistoVisibilityRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetShutterEnabledRequest, ICameraSetShutterEnabledRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraSetMeteoPresetRequest, ICameraSetMeteoPresetRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraRunSystemCommandRequest, ICameraRunSystemCommandRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetHardwareIdRequest, ICameraGetHardwareIdRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetHardwareIdResponse, ICameraGetHardwareIdResponse>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetSoftwareVersionRequest, ICameraGetSoftwareVersionRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetSoftwareVersionResponse, ICameraGetSoftwareVersionResponse>(MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraZoomMinusRequest, ICameraZoomMinusRequest>(() => new SeamosCameraZoomMinusRequest() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraZoomPlusRequest, ICameraZoomPlusRequest>(() => new SeamosCameraZoomPlusRequest() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraStopRequest, ICameraStopRequest>(() => new SeamosCameraStopRequest() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraGetZoomRequest, ICameraGetZoomRequest>(() => new SeamosCameraGetZoomRequest() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraGetZoomResponse, ICameraGetZoomResponse>(() => new SeamosCameraGetZoomResponse() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraFocusMinusContinuousRequest, ICameraFocusMinusContinuousRequest>(() => new SeamosCameraFocusMinusContinuousRequest() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraFocusPlusContinuousRequest, ICameraFocusPlusContinuousRequest>(() => new SeamosCameraFocusPlusContinuousRequest() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraSetFocusSpeedRequest, ICameraSetFocusSpeedRequest>(() => new SeamosCameraSetFocusSpeedRequest() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetStateResponse, ICameraGetStateResponse>(MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraSetFovMode0Request, ICameraSetFovMode0Request>(() => new SeamosCameraSetFovMode0Request() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
            this.RegisterInstance<SeamosCameraSetFovMode1Request, ICameraSetFovMode1Request>(() => new SeamosCameraSetFovMode1Request() { ChannelByte = 0x02 }, MaterialTarget.ThermalCamera);
           
            this.RegisterType<SeamosCameraGetClaheRequest, ICameraGetClaheRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetClaheResponse, ICameraGetClaheResponse>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetClaheClipRequest, ICameraGetClaheClipRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetClaheClipResponse, ICameraGetClaheClipResponse>(MaterialTarget.ThermalCamera);         
            this.RegisterType<SeamosCameraGetClaheGridSizeRequest, ICameraGetClaheGridSizeRequest>(MaterialTarget.ThermalCamera);
            this.RegisterType<SeamosCameraGetClaheGridSizeResponse, ICameraGetClaheGridSizeResponse>(MaterialTarget.ThermalCamera);
            // Commandes centrale intertiel
            this.RegisterType<SeamosIntertialMeasurementGetValuesRequest, IIntertialMeasurementGetValuesRequest>(MaterialTarget.IntertialMeasurement);
            this.RegisterType<SeamosIntertialMeasurementGetValuesResponse, IIntertialMeasurementGetValuesResponse>(MaterialTarget.IntertialMeasurement);
            // Commandes télémètre
            this.RegisterType<SeamosTelemeterActionShootRequest, ITelemeterActionShootRequest>(MaterialTarget.Telemeter);
            this.RegisterType<SeamosTelemeterActionShootResponse, ITelemeterActionShootResponse>(MaterialTarget.Telemeter);
            this.RegisterType<SeamosTelemeterErrorResponse, ITelemeterErrorResponse>(MaterialTarget.Telemeter);
            this.RegisterType<SeamosTelemeterExitTestModeRequest, ITelemeterExitTestModeRequest>(MaterialTarget.Telemeter);
            this.RegisterType<SeamosTelemeterGetVersionRequest, ITelemeterGetVersionRequest>(MaterialTarget.Telemeter);
            this.RegisterType<SeamosTelemeterGetVersionResponse, ITelemeterGetVersionResponse>(MaterialTarget.Telemeter);
            this.RegisterType<SeamosTelemeterSetOffRequest, ITelemeterSetOffRequest>(MaterialTarget.Telemeter);
            this.RegisterType<SeamosTelemeterSetOnRequest, ITelemeterSetOnRequest>(MaterialTarget.Telemeter);



        }
    }
}
