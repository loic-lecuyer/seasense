import { WsRequest } from "./ws-request";

export interface WsCameraFocusInStartRequest extends WsRequest {  
  materialId: string;
  unitId: string;
}
