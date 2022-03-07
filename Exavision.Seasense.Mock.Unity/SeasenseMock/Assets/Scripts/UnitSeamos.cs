using Exavision.Seasense.Core.Network;
using Exavision.Seasense.Protocols.Seamos;
using Exavision.Seasense.Protocols.Seamos.Commands;
using Exavision.Seasense.Core.Extensions;
using Exavision.Seasense.Protocols.Seamos.Commands.Turret;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Net;
using UnityEditor;
using UnityEngine;

public class UnitSeamos : MonoBehaviour
{
    public string clientIp = "127.0.0.1";
    public ushort clientPort = 5000;
    private TcpCoreStringServer server;
    private SeamosProtocol protocol;
    private bool isGyrostabilizationEnabled;
    public double panSpeed = 0;
    public double tilSpeed = 0;
    public double Pan = 0;
    public double Tilt = 0;

    // Start is called before the first frame update
    void Start()
    {
        if (this.server != null) {
            this.server.Stop();
        }
        this.protocol = new SeamosStandardProtocol();
        this.server = new TcpCoreStringServer();
        this.server.OnMessageReceived += this.Server_OnMessageReceived;
        this.server.Start(new IPEndPoint(IPAddress.Parse(clientIp), clientPort),"\r\n");
    }
 

    private void Server_OnMessageReceived(object sender, System.Tuple<TcpCoreStringClient, string> e) {
        ISeamosCommand command= this.protocol.Deserialize(e.Item2);
        if (command != null) this.ProcessCommand(command,e.Item1);
    }

    private void ProcessCommand(ISeamosCommand command, TcpCoreStringClient client) {
        Debug.Log("Recevie command " + command.GetType().Name);
        if (command is ITurretGetPositionExatrack2Absolute extatrackRequestPosition) {
            if (extatrackRequestPosition.MoveMode == MoveModeExatrack2.Absolute
                && extatrackRequestPosition.PanTiltZoomMode == PtModeExatrack2.Ignore) {
                ITurretGetPositionExatrack2Absolute res = this.protocol.Resolve<ITurretGetPositionExatrack2Absolute>(MaterialTarget.Turret);
                res.Pan = this.Pan;
                res.PanTiltZoomMode = PtModeExatrack2.Absolute;
                res.Tilt = this.Tilt;
                res.StabilizationState = isGyrostabilizationEnabled ? StabilizationStateExatrack2.On : StabilizationStateExatrack2.Off;
                res.SystemTarget = SystemTarget.Computer;
                this.SendCommand(res, client);
            } else if (extatrackRequestPosition.PanTiltZoomMode == PtModeExatrack2.Speed) {
                this.isGyrostabilizationEnabled = extatrackRequestPosition.StabilizationState == StabilizationStateExatrack2.On;
                this.panSpeed = extatrackRequestPosition.PanSpeed;
                this.tilSpeed = extatrackRequestPosition.TiltSpeed;
                System.Diagnostics.Debug.WriteLine("Receive speed command " + extatrackRequestPosition.PanSpeed + " " + extatrackRequestPosition.TiltSpeed);
            }
        }
    }
    private void SendCommand(ISeamosCommand command, TcpCoreStringClient client) {
        byte[] data = this.protocol.Serialize(command);
        string text = data.ToHexString();
        client.Send(text);

    }
    // Update is called once per frame
    void Update()
    {
        
    }
    
}
