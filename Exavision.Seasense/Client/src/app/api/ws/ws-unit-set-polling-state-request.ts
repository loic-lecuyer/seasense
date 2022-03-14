import { SpeedVector } from "./speed-vector";
import { WsRequest } from "./ws-request";

export interface WsUnitSetPollingStateRequest extends WsRequest {  
  unitId: string;
  isPollingEnabled: boolean;
}
