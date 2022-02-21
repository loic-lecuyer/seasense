import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtGuard } from './guards/jwt-guard';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MatTooltipModule } from '@angular/material/tooltip';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [JwtGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'configuration', component: ConfigurationComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    MatTooltipModule
  ]
})
export class AppRoutingModule { }
