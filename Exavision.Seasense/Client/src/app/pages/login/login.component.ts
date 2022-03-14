import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sha512 } from 'js-sha512';
import { LoginResponse } from '../../api/http/login-response';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';
import { WsService } from '../../services/ws.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string = "sav";
  public password: string = "sav";
  public loginRunning: boolean = false;
  public errorMessage: string = "";

  constructor(private httpService: HttpService, private userService: UserService, private router: Router, private wsService: WsService) {
   
  }

  ngOnInit(): void {
  }
  async onConnectButtonClick() {
    this.loginRunning = true;
    this.userService.clearToken();
    this.userService.clearUser();
    this.errorMessage = "";
    let hash: string = sha512(this.password);
    this.httpService.login(this.login, hash).subscribe({
      next: (response: LoginResponse) => {
        this.userService.setToken(response.token);
        this.userService.setUser(response.user);
        this.loginRunning = false;
        this.wsService.start();
        this.router.navigate(['/home']);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.loginRunning = false;
      },
    });  
    
  }
 
}

