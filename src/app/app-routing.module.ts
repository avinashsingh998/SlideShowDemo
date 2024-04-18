import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutoScrollComponent } from './auto-scroll/auto-scroll.component';
import { AddFileComponent } from './add-file/add-file.component';

const routes: Routes = [
  {path : "fileAdd", component : AddFileComponent},
  {path : "register", component : SignupComponent},
  {path : "login", component : LoginComponent},
  {path : "home", component : DashboardComponent},
  {path : "auto-scroll", component : AutoScrollComponent},
  {path : "**", redirectTo : "fileAdd", pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
