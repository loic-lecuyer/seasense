import { SpeedVector } from "./speed-vector";
import { WsRequest } from "./ws-request";

export interface WsLazerMeasurementShootRequest extends WsRequest {  
  materialId: string;
  unitId: string;

}
