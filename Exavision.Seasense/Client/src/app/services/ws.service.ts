import { Injectable } from '@angular/core';
import { WsTurretMoveSpeedRequest } from '../api/ws/ws-turret-move-speed-request';
import { UserService } from './user.service';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class WsService {
 

  constructor(private userService: UserService) { }

 
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
  }
  wsError(event: Event) {
    console.error("wsError", event);
  }

  wsMessage(event: MessageEvent) {
    console.log("Message " , event);
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
  }

  turretMoveSpeed(unitId: string, materialId: string, axisX: number, axisY: number) {
    if (this.userService.token == null) return;
    let request: WsTurretMoveSpeedRequest = {
      $type: "WsTurretMoveSpeedRequest",
      requestId: uuid.v4(),
      unitId: unitId,
      materialId: materialId,
      axisX: axisX,
      axisY: axisX,
      token: this.userService.token    
    };
    let data: string = JSON.stringify(request);
    console.log("WbeSocket Send ", request);
    this.socket?.send(data);

  }

}
