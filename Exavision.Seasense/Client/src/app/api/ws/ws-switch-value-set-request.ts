import { SpeedVector } from "./speed-vector";
import { WsRequest } from "./ws-request";

export interface WsSwitchValueSetRequest extends WsRequest {  
  materialId: string;
  unitId: string;
  capabilityId: string;
  value: string;
}
