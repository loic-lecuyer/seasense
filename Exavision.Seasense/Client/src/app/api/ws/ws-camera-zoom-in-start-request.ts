import { WsRequest } from "./ws-request";

export interface WsCameraZoomInStartRequest extends WsRequest {  
  materialId: string;
  unitId: string;
}
