import { User } from "../../models/user";
import { HttpResponse } from "./http-response";



export interface LoginResponse extends HttpResponse {
  user: User;
  token: string ;
  errorMessage: string;
}
