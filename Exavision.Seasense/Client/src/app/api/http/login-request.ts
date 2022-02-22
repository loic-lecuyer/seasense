import { HttpRequest } from "./http-request";

export class LoginRequest extends HttpRequest {
  public login: string = "";
  public passwordHash: string = "";
}
