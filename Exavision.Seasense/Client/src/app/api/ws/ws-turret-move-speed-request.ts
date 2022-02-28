import { WsRequest } from "./ws-request";

export interface WsTurretMoveSpeedRequest extends WsRequest {  
  materialId: string;
  unitId: string;
  axisX: number;
  axisY: number;
}
