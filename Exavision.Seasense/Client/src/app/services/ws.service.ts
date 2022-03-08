import { Injectable } from '@angular/core';
import { WsTurretMoveSpeedRequest } from '../api/ws/ws-turret-move-speed-request';
import { UserService } from './user.service';
import * as uuid from 'uuid';
import { WsGetStateRequest } from '../api/ws/ws-get-state-request';
import { WsGetStateResponse } from '../api/ws/ws-get-state-response';
import { Factory } from '../materials/factory';
import { WsResponse } from '../api/ws/ws-response';
import { SiteState } from '../materials/states/site-state';
import { Subject } from 'rxjs';
import { WsCameraZoomOutStartRequest } from '../api/ws/ws-camera-zoom-out-start-request';
import { WsCameraZoomStopRequest } from '../api/ws/ws-camera-zoom-stop-request';
import { WsCameraZoomInStartRequest } from '../api/ws/ws-camera-zoom-in-start-request';
import { WsTurretGyrostabilizationRequest } from '../api/ws/ws-turret-gyrostabilization-request';
import { WsCameraAutoFocusOnePushRequest } from '../api/ws/ws-camera-auto-focus-one-push-request';
import { WsLazerMeasurementShootRequest } from '../api/ws/ws-lazer-measurement-shoot-request';
import { WsDoubleValueSetRequest } from '../api/ws/ws-double-value-set-request';
import { SwitchValue } from '../models/switch-value';
import { WsSwitchValueSetRequest } from '../api/ws/ws-switch-value-set-request';
import { WsCameraScreenshotRequest } from '../api/ws/ws-camera-scenneshot-request';
@Injectable({
  providedIn: 'root'
})
export class WsService {

 

  public siteStateSubject: Subject<SiteState> = new Subject<SiteState>();
  private stateTimer: any;
  private stateInterval: number = 100;

  constructor(private userService: UserService) {
   
  }
  tryGetState() {
    try { this.getStates(); }
    catch {}

  }

 
  private socket: WebSocket | null = null;
  start() {  
 
    if (this.socket != null) {
      this.socket.close();
      this.socket = null;
    }
    let scheme = document.location.protocol === "https:" ? "wss" : "ws";
    let port = document.location.port ? (":" + document.location.port) : "";
    let connectionUrl = scheme + "://" + document.location.hostname + port + "/ws";
    this.socket = new WebSocket(connectionUrl);
    this.socket.onopen = (event) => {

      this.wsOpen(event);
    };
    this.socket.onclose = async (event) => {
      this.wsClose(event);
    };
    this.socket.onmessage = (event) => {
      this.wsMessage(event);
    };
    this.socket.onerror = (event) => {
      this.wsError(event);
    };
    this.stateTimer = setInterval(() => { this.tryGetState(); }, this.stateInterval);
  }
  wsError(event: Event) {
    console.error("wsError", event);
  }

  wsMessage(event: MessageEvent) {
    if (event.data != null) {
      let obj = JSON.parse(event.data);
      if (obj.$type != null) {
        let factory: Factory = new Factory()
        let response: WsResponse = factory.createMessage(obj);
        if (response.$type === 'WsGetStateResponse') {
          this.siteStateSubject.next((<WsGetStateResponse>response).site)
        } 
      
       
      }
     
    }
    
  }
  async wsClose(event: CloseEvent) {
    console.log("wsClose", event);
    

  }
  wsOpen(event: Event) {
    console.log("wsOpen", event);
  }

  stop() {
    if (this.socket != null) {
      this.socket.close();
    }
    clearInterval(this.stateTimer);
  }
  getStates() {
    
    if (this.userService.token == null) return;
    let request: WsGetStateRequest = {
      $type: "WsGetStateRequest",
      requestId: uuid.v4(),  
      token: this.userService.token
    };
    let data: string = JSON.stringify(request);
 
    this.socket?.send(data);
    
  }

  turretMoveSpeed(unitId: string, materialId: string, axisX: number, axisY: number) {
    if (this.userService.token == null) return;
    let request: WsTurretMoveSpeedRequest = {
      $type: "WsTurretMoveSpeedRequest",
      requestId: uuid.v4(),
      unitId: unitId,
      materialId: materialId,
      speed: {
        x: axisX,
        y: axisY
      },
    
      token: this.userService.token    
    };
    console.log("wsService send turretMoveSpeed " + axisX + " " + axisY);
    let data: string = JSON.stringify(request);   
    this.socket?.send(data);

  }

  cameraZoomStop(unitId: string, materialId: string) {
    if (this.userService.token == null) return;
    let request: WsCameraZoomStopRequest = {
      $type: "WsCameraZoomStopRequest",
      unitId: unitId,
      requestId: uuid.v4(),
      materialId: materialId,
      token: this.userService.token
     
    };
    console.log("WebSocket send stopZoom");
    let data: string = JSON.stringify(request);
    this.socket?.send(data);
  }
  cameraZoomInStart(unitId: string, materialId: string) {
    if (this.userService.token == null) return;
    let request: WsCameraZoomInStartRequest = {
      $type: "WsCameraZoomInStartRequest",
      unitId: unitId,
      requestId: uuid.v4(),
      materialId: materialId,
      token: this.userService.token
    
    };
    console.log("WebSocket send cameraZoomInStart");
    let data: string = JSON.stringify(request);
    this.socket?.send(data);
  }
  cameraZoomOutStart(unitId: string, materialId: string) {
    if (this.userService.token == null) return;
    let request: WsCameraZoomOutStartRequest = {
      $type: "WsCameraZoomOutStartRequest",
      unitId: unitId,
      requestId: uuid.v4(),
      materialId: materialId,
      token: this.userService.token    
    };
    console.log("WebSocket send cameraZoomOutStart");
    let data: string = JSON.stringify(request);
    this.socket?.send(data);
  }

  turretGyrostabilization(unitId: string, materialId: string, enabled: boolean) {
    if (this.userService.token == null) return;
    let request: WsTurretGyrostabilizationRequest = {
      $type: "WsTurretGyrostabilizationRequest",
      unitId: unitId,
      requestId: uuid.v4(),
      materialId: materialId,
      token: this.userService.token,
      enabled:enabled
    };
    console.log("WebSocket send WsTurretGyrostabilizationRequest");
    let data: string = JSON.stringify(request);
    this.socket?.send(data);
  }

  cameraAutoFocusOnePush(unitId: string, materialId: string) {
    if (this.userService.token == null) return;
    let request: WsCameraAutoFocusOnePushRequest = {
      $type: "WsCameraAutoFocusOnePushRequest",
      unitId: unitId,
      requestId: uuid.v4(),
      materialId: materialId,
      token: this.userService.token      
    };
    console.log("WebSocket send WsCameraAutoFocusOnePushRequest");
    let data: string = JSON.stringify(request);
    this.socket?.send(data);
  }

  lazerMeasurementShoot(unitId: string, materialId: string) {
    if (this.userService.token == null) return;
    let request: WsLazerMeasurementShootRequest = {
      $type: "WsLazerMeasurementShootRequest",
      unitId: unitId,
      requestId: uuid.v4(),
      materialId: materialId,
      token: this.userService.token
    };
    console.log("WebSocket send WsLazerMeasurementShootRequest");
    let data: string = JSON.stringify(request);
    this.socket?.send(data);
  }

  doubleValueSet(unitId: string, materialId: string,capabilityId : string, value: number) {
    if (this.userService.token == null) return;
    let request: WsDoubleValueSetRequest = {
      $type: "WsDoubleValueSetRequest",
      unitId: unitId,
      requestId: uuid.v4(),
      materialId: materialId,
      token: this.userService.token,
      capabilityId: capabilityId,
      value: value
    };
    console.log("WebSocket send WsDoubleValueSetRequest");
    let data: string = JSON.stringify(request);
    this.socket?.send(data);

  }

  switchValueSet(unitId: string, materialId: string, capabilityId: string, value: SwitchValue) {

    if (this.userService.token == null) return;
    let request: WsSwitchValueSetRequest = {
      $type: "WsSwitchValueSetRequest",
      unitId: unitId,
      requestId: uuid.v4(),
      materialId: materialId,
      token: this.userService.token,
      capabilityId: capabilityId,
      value: value.value
    };
    console.log("WebSocket send WsSwitchValueSetRequest");
    let data: string = JSON.stringify(request);
    this.socket?.send(data);
    

  }

  screenshot(unitId: string, materialId: string) {
    if (this.userService.token == null) return;
    let request: WsCameraScreenshotRequest = {
      $type: "WsCameraScreenshotRequest",
      unitId: unitId,
      requestId: uuid.v4(),
      materialId: materialId,
      token: this.userService.token,
      
    };
    console.log("WebSocket send WsCameraScreenshotRequest");
    let data: string = JSON.stringify(request);
    this.socket?.send(data);
    
    throw new Error('Method not implemented.');
  }

}
