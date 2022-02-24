import { SettingSite } from "../../materials/settings/setting-site";
import { HttpResponse } from "./http-response";


export interface GetSettingResponse extends HttpResponse {
  site: SettingSite;

}
