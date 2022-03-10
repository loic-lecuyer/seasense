import { WsRequest } from "./ws-request";

export interface WsCameraStopRecordRequest extends WsRequest {
  materialId: string;
  unitId: string;
  recordId: string;
}
