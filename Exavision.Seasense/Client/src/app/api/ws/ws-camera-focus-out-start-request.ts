import { WsRequest } from "./ws-request";

export interface WsCameraFocusOutStartRequest extends WsRequest {  
  materialId: string;
  unitId: string;
}
