import { SpeedVector } from "./speed-vector";
import { WsRequest } from "./ws-request";

export interface WsUnitExecuteCommandRequest extends WsRequest {  
  unitId: string;
  command: string;
}
