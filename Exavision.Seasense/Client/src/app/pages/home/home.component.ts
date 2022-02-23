import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetSettingResponse } from '../../api/http/get-setting-response';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getSetting().subscribe({
      next: (response: GetSettingResponse) => {

        
      },
      error: (err: HttpErrorResponse) => {
        
      },
    });  
  }

}
