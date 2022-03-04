import { WsResponse } from "./ws-response";

export interface WsErrorResponse extends WsResponse {
  errorMessage: string;

}
