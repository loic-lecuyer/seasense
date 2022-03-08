import { WsRequest } from "./ws-request";

export interface WsCameraScreenshotRequest extends WsRequest {
  materialId: string;
  unitId: string;
}
