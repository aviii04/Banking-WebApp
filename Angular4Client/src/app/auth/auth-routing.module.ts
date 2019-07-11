import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterationComponent} from './registeration/registeration.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'registeration',component:RegisterationComponent},
  {path:'registeration/login',redirectTo:'/login',pathMatch:"full"}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule,ReactiveFormsModule]
})
export class AuthRoutingModule { }
