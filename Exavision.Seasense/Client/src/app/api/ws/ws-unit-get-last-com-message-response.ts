import { SpeedVector } from "./speed-vector";
import { WsRequest } from "./ws-request";
import { WsResponse } from "./ws-response";

export interface WsUnitGetLastComMessageResponse extends WsResponse {  
  messages: string[];
}
