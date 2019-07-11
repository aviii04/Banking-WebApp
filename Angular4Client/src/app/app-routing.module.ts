
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BodyComponent} from './home/body/body.component'

const appRoutes: Routes = [
  {path:'home',component:BodyComponent},
  {path:'', redirectTo:'/home',pathMatch:"full"},
  {path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
  CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule {}
