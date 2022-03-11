namespace Exavision.Seasense.Protocols.Pelco {
    using Exavision.Seasense.Protocols.Pelco.Commands;
    using Exavision.Seasense.Protocols.Pelco.Standard;

    /// <summary>
    /// Defines the <see cref="PelcoStandardProtocol" />.
    /// </summary>
    public class PelcoStandardProtocol : PelcoProtocol
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PelcoStandardProtocol"/> class.
        /// </summary>
        public PelcoStandardProtocol() : base()
        {
            this.Register<PelcoStandardDownCommand, IPelcoDownCommand>();
            this.Register<PelcoStandardUpCommand, IPelcoUpCommand>();
            this.Register<PelcoStandardLeftCommand, IPelcoLeftCommand>();
            this.Register<PelcoStandardRightCommand, IPelcoRightCommand>();
            this.Register<PelcoStandardDownLeftCommand, IPelcoDownLeftCommand>();
            this.Register<PelcoStandardDownRightCommand, IPelcoDownRightCommand>();
            this.Register<PelcoStandardUpLeftCommand, IPelcoUpLeftCommand>();
            this.Register<PelcoStandardUpRightCommand, IPelcoUpRightCommand>();
            this.Register<PelcoStandardStopCommand, IPelcoStopCommand>();
            this.Register<PelcoStandardFocusFarContinuousCommand, IPelcoFocusFarContinuousCommand>();
            this.Register<PelcoStandardFocusNearContinuousCommand, IPelcoFocusNearContinuousCommand>();
            this.Register<PelcoStandardPresetCallCommand, IPelcoPresetCallCommand>();
            this.Register<PelcoStandardPresetClearCommand, IPelcoPresetClearCommand>();
            this.Register<PelcoStandardPresetSetCommand, IPelcoPresetSetCommand>();
            this.Register<PelcoStandardZoomInCommand, IPelcoZoomInCommand>();
            this.Register<PelcoStandardZoomOutCommand, IPelcoZoomOutCommand>();
            this.Register<PelcoStandardGetPanRequestCommand, IPelcoGetPanRequestCommand>();
            this.Register<PelcoStandardGetPanResponseCommand, IPelcoGetPanResponseCommand>();
            this.Register<PelcoStandardGetTiltRequestCommand, IPelcoGetTiltRequestCommand>();
            this.Register<PelcoStandardGetTiltResponseCommand, IPelcoGetTiltResponseCommand>();
            this.Register<PelcoStandardGetZoomRequestCommand, IPelcoGetZoomRequestCommand>();
            this.Register<PelcoStandardGetZoomResponseCommand, IPelcoGetZoomResponseCommand>();
            this.Register<PelcoStandardSetPanPositionCommand, IPelcoSetPanPositionCommand>();
            this.Register<PelcoStandardSetTiltPositionCommand, IPelcoSetTiltPositionCommand>();
            this.Register<PelcoStandardSetPolarityCommand, IPelcoSetPolarityCommand>();
            this.Register<PelcoNucCommand, IPelcoNucCommand>();
            this.Register<PelcoRpLabSharkSetFocusSpeedCommand, IPelcoSetFocusSpeedCommand>();
        }

        /// <summary>
        /// Gets the ProtocolDescription.
        /// </summary>
        public override string ProtocolDescription => "PelcoStandardProtocol";
    }
}
