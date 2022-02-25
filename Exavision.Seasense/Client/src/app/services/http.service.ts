import { HttpClient, HttpHeaders } from '@angular/common/http';
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
import { SetSettingResponse } from '../api/http/set-setting-response';
import { SettingSite } from '../materials/settings/setting-site';
import { SetSettingRequest } from '../api/http/set-setting-request';
import { UnitCreateEmptyResponse } from '../api/http/unit-create-empty-response';
import { UnitCreateEmptyRequest } from '../api/http/unit-create-empty-request';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseApiUrl: string = "";
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
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
    return this.http.post<LoginResponse>(url, req, { headers: this.headers });
  }

  logout(): Observable<LogoutResponse> {
    let url: string = this.getApiUrl("logout");
    let req: LogoutRequest = { };
    return this.http.post<LogoutResponse>(url, req, { headers: this.headers });
  }

  validateToken(): Observable<ValidateTokenResponse> {
    let url: string = this.getApiUrl("token/validate");
    let req: ValidateTokenRequest = {};
    return this.http.post<ValidateTokenResponse>(url, req, { headers: this.headers });
  }
  getSetting(): Observable<GetSettingResponse> {
    let url: string = this.getApiUrl("setting/get");
    let req: GetSettingRequest = {};
    return this.http.post<GetSettingResponse>(url, req,{ headers: this.headers });
  }

  setSetting(settingSite: SettingSite): Observable<SetSettingResponse> {
    let url: string = this.getApiUrl("setting/set");
    let req: SetSettingRequest = {
      site: settingSite
    };
    return this.http.post<SetSettingResponse>(url, req, { headers: this.headers });
  }

  createEmptyUnit(unitType: string): Observable<UnitCreateEmptyResponse> {
    let url: string = this.getApiUrl("unit/create/empty");
    let req: UnitCreateEmptyRequest = {
      unitType: unitType
    };
    return this.http.post<UnitCreateEmptyResponse>(url, req, { headers: this.headers });
  }
}
