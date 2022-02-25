import { SettingSite } from "../../materials/settings/setting-site";
import { HttpRequest } from "./http-request";


export interface SetSettingRequest extends HttpRequest {
  site: SettingSite;

}
