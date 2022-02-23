import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../api/http/login-request';
import { LoginResponse } from '../api/http/login-response';
import { Observable } from 'rxjs';
import { ValidateTokenResponse } from '../api/http/validate-token-response';
import { ValidateTokenRequest } from '../api/http/validate-token-request';
import { LogoutResponse } from '../api/http/logout-response';
import { LogoutRequest } from '../api/http/logout-request';
import { GetSettingResponse } from '../api/http/get-setting-response';
import { GetSettingRequest } from '../api/http/get-setting-request';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseApiUrl: string = "";

  constructor(private http: HttpClient) {
  }
  getApiUrl(path : string): string{
    if (this.baseApiUrl == "") {
      let url: string = "";
      if (location.protocol !== 'https:') {
        url += "http://";
      }
      else {
        url += "https://";
      }
      url += window.location.hostname;
      url += ":";
      url += window.location.port;
      url += "/api/";     
      this.baseApiUrl = url;
    }
 
    return this.baseApiUrl + path;
  }
  login(login: string, hash: string): Observable<LoginResponse> {
    let url: string = this.getApiUrl("login");
    let req: LoginRequest = {
      login: login,
      passwordHash: hash
    };
    return this.http.post<LoginResponse>(url, req)
  }

  logout(): Observable<LogoutResponse> {
    let url: string = this.getApiUrl("logout");
    let req: LogoutRequest = { };
    return this.http.post<LogoutResponse>(url, req)
  }

  validateToken(): Observable<ValidateTokenResponse> {
    let url: string = this.getApiUrl("token/validate");
    let req: ValidateTokenRequest = {};
    return this.http.post<ValidateTokenResponse>(url, req)
  }
  getSetting(): Observable<GetSettingResponse> {
    let url: string = this.getApiUrl("setting");
    let req: GetSettingRequest = {};
    return this.http.post<GetSettingResponse>(url, req)
  }
}
