import { WsRequest } from "./ws-request";
import { WsResponse } from "./ws-response";

export interface WsCameraStartRecordResponse extends WsResponse {
  recordId: string;

}
