import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginRequest } from '../api/http/login-request';
import { LoginResponse } from '../api/http/login-response';

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
    let pathUrl: string = this.baseApiUrl  + path;
    return pathUrl;
  }
  async login(login: string, hash: string): Promise<boolean> {
    let req: LoginRequest = {
      login: login,
      passwordHash: hash
    };
    let url: string = this.getApiUrl("login");
    console.log('call ' + url);
    this.http.post(url, req).subscribe(data => {

    });
  
    return false;
  }
 
  
}
