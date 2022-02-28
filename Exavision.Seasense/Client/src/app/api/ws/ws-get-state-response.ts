import { SiteState } from "../../materials/states/site-state";
import { WsRequest } from "./ws-request";

export interface WsGetStateResponse extends WsRequest {
  site: SiteState;
}
