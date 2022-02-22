import { Component, OnInit } from '@angular/core';
import { sha512 } from 'js-sha512';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string = "";
  public password: string = "";
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }
  async onConnectButtonClick() {
    let hash: string = sha512(this.password);
    let logged : boolean = await this.httpService.login(this.login, hash);
    console.log("try login " + this.login + " " + this.password);
  }

}

