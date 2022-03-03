import { WsRequest } from "./ws-request";

export interface WsCameraAutoFocusOnePushRequest extends WsRequest {  
  materialId: string;
  unitId: string;
}
