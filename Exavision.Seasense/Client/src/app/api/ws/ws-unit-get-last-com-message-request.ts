import { SpeedVector } from "./speed-vector";
import { WsRequest } from "./ws-request";

export interface WsUnitGetLastComMessageRequest extends WsRequest {  
  unitId: string; 
}
