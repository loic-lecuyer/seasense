import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  localStorage: Storage;
  user: User | null;
  token: string | null;
  constructor() {
    this.user = null;
    this.token = null;
    this.localStorage = window.localStorage;
  }
  clearUser() {
    this.user = null;
  }
  clearToken() {
    this.token = null;
  }

  setUser(user: User) {
    this.user = user;
    
  }
  setToken(token: string) {
    this.token = token;
  }
}
