import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [NavbarComponent, FooterComponent, BodyComponent],
  exports:[
    NavbarComponent,
    FooterComponent,
    BodyComponent
  ]
})
export class HomeModule { }
