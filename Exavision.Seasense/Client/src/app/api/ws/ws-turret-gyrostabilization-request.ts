import { SpeedVector } from "./speed-vector";
import { WsRequest } from "./ws-request";

export interface WsTurretGyrostabilizationRequest extends WsRequest {  
  materialId: string;
  unitId: string;
  enabled: boolean;
}
