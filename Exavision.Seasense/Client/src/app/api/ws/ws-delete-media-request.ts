import { WsRequest } from "./ws-request";

export interface WsDeleteMediaRequest extends WsRequest {  
  fileName: string;
}
