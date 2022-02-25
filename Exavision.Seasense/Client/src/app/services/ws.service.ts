import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WsService {
 

  constructor() { }

 
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

}