import { SpeedVector } from "./speed-vector";
import { WsRequest } from "./ws-request";

export interface WsTurretMoveSpeedRequest extends WsRequest {  
  materialId: string;
  unitId: string;
  speed: SpeedVector;
}
