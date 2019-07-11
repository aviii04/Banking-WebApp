import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Services
import {UserService} from './auth/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// Module
import {HomeModule} from './home/home.module';
import {AuthModule} from './auth/auth.module';
// Components
import {AppComponent} from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import {NavbarComponent} from './home/navbar/navbar.component'


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    // NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    
    HomeModule,
    AuthModule,
    AppRoutingModule,
   
    
   
   
  ],
  exports:[],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
