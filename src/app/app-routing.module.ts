import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { GetComponent } from './get/get.component';
import { LoginComponent } from './login/login.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'display',component:DisplayComponent},
  {path:'get',component:GetComponent},
  {path:'thanks',component:ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
