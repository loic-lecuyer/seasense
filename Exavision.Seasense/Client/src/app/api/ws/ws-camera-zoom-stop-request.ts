import { WsRequest } from "./ws-request";

export interface WsCameraZoomStopRequest extends WsRequest {  
  materialId: string;
  unitId: string;
}
