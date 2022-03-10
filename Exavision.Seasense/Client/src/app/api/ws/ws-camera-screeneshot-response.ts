import { WsRequest } from "./ws-request";
import { WsResponse } from "./ws-response";

export interface WsCameraScreenshotResponse extends WsResponse {
  fileName: string;
  userLogin: string;
}
