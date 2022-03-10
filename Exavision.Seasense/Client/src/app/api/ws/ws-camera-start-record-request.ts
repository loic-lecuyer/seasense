import { WsRequest } from "./ws-request";

export interface WsCameraStartRecordRequest extends WsRequest {
  materialId: string;
  unitId: string;
}
