import { MediaFile } from "../../models/media-file";
import { WsRequest } from "./ws-request";

export interface WsGetMediaListResponse extends WsRequest {
  files: MediaFile[];
  
}
