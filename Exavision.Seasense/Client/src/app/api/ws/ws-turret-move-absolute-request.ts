import { PanTiltPosition } from "./pan-tilt-position";
import { SpeedVector } from "./speed-vector";
import { WsRequest } from "./ws-request";

export interface WsTurretMoveAbsoluteRequest extends WsRequest {  
  materialId: string;
  unitId: string;
  position: PanTiltPosition;
}
