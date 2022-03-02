import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { JwtInterceptor } from './interceptor/jwt-interceptor';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { HudUiComponent } from './components/hud-ui/hud-ui.component';
import { HudStreamComponent } from './components/hud-stream/hud-stream.component';
import { HudPanRullerComponent } from './components/hud-pan-ruller/hud-pan-ruller.component';
import { HudTiltRullerComponent } from './components/hud-tilt-ruller/hud-tilt-ruller.component';
import { HudStatusComponent } from './components/hud-status/hud-status.component';
import { CompassComponent } from './components/compass/compass.component';
import { StickComponent } from './components/stick/stick.component';
import { HudButtonComponent } from './components/hud-button/hud-button.component';
import { MatRippleModule } from '@angular/material/core';
/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ConfigurationComponent,
    HeaderComponent,
    HudUiComponent,
    HudStreamComponent,
    HudPanRullerComponent,
    HudTiltRullerComponent,    
    HudStatusComponent, CompassComponent, StickComponent, HudButtonComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatRippleModule,
    ScrollingModule,
    MatListModule,
    MatTreeModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule ,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, UserService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
