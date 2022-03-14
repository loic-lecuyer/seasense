import { WsRequest } from "./ws-request";

export interface WsCameraFocusStopRequest extends WsRequest {  
  materialId: string;
  unitId: string;
}
