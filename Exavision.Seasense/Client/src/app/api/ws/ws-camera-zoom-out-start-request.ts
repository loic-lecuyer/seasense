import { WsRequest } from "./ws-request";

export interface WsCameraZoomOutStartRequest extends WsRequest {  
  materialId: string;
  unitId: string;
}
