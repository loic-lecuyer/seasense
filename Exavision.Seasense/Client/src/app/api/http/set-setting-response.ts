import { SettingSite } from "../../materials/settings/setting-site";
import { HttpResponse } from "./http-response";


export interface SetSettingResponse extends HttpResponse {
  site: SettingSite;

}
