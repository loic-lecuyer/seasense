import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutResponse } from '../../api/http/logout-response';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService, private httpService: HttpService, private router: Router) {

  }

  ngOnInit(): void {
  }
  onHomeClick() {
  }
  onLogoutClick() {
    this.httpService.logout().subscribe({
      next: (response: LogoutResponse) => {
        this.userService.clearToken();
        this.userService.clearUser();
        this.router.navigate(['/login'])
      },
      error: (err: HttpErrorResponse) => {
        this.userService.clearToken();
        this.userService.clearUser();
        this.router.navigate(['/login'])
      },
    });  
  }
}
