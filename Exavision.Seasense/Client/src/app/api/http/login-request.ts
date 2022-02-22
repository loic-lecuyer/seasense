import { HttpRequest } from "./http-request";

export interface LoginRequest extends HttpRequest {
  login: string;
  passwordHash: string;
}
