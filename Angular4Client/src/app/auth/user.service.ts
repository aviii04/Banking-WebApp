// import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import{ Http, Headers} from '@angular/http';
// // import{Headers} from '@angular/http';
// import {Observable} from 'rxjs';
// import {User} from './user';
// import{map} from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';
// import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';


// @Injectable()
// export class UserService {

//   constructor(private https:Http, private http: HttpClient, private header:HttpHeaders) { }
//   url='http://localhost:8000/';
//   private headers = new Headers({ 'Accept': 'application/x-www-form-urlencoded','Content-Type':'application/json'});

//   // const httpOptions = {
//   //   headers: new HttpHeaders({
//   //     'Accept': 'application/x-www-form-urlencoded',
//   //     'Content-Type':  'application/json',
//   //     'Authorization': 'Basic' + btoa(username + ":" + password)
//   //   })
//   // };

//   register(user: User):Promise<User>{
//    const rl=this.url+'registeration';

//     return this.http
//     .post(rl,JSON.stringify(user),{headers : this.headers})
//     .toPromise()
//     .then(response => response.json() as User)
//     .catch(this.handleError);

//   }
  // register(user: User):Observable<User>{
  //   const reg_date=new Date(); //Registeration Date
  //   user.RegisDate=reg_date;
  //   let formatted_date = reg_date.getDate() + "-" + (reg_date.getMonth() + 1) + "-" + reg_date.getFullYear();
  //   user.reg_date=formatted_date;
  //   console.log(user);
  //   return this.http.post<User>("postuser",JSON.stringify(user),{headers : this.headers})
  // }
     
  

//   // Dumy function
//   // register(user: User){
//   //   user.RegisDate=new Date(); //Registeration Date
//   //   console.log(user);
//   // }

//   login( user_id: string, password: string){
//     return this.http.post<any>(this.url+`success`, { user_id: user_id, password: password })
//     .pipe(map(user => {
//       // user.login is boolean value
//       if (user!=false) {
//           localStorage.setItem('currentUser',user_id);
//       }

//       return user_id;
//     }));
//   }

  
//   logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('currentUser');
// }

// private handleError(erro: any): Promise<any>{
//   console.error('Error', erro);
//   return Promise.reject(erro.message||erro);
// }
  

// }


// ===============================================
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import{map} from 'rxjs/operators';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {

  // private customersUrl = 'customer';  // URL to web API
  url='http://localhost:8000/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}
// =============================================
  // Get all customers
  // getCustomers(): Promise<User> {
  //   return this.http.get(this.customersUrl)
  //     .toPromise()
  //     .then(response => response.json() as User)
  //     .catch(this.handleError);
  // }

  // getCustomersByLastName(lastName: string): Promise<User> {
  //   const url = `findbylastname/${lastName}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json() as User)
  //     .catch(this.handleError);
  // }

  register(customer: User): Promise<User> {

    var temp=new Date();
    customer.r_date=temp.getDate()+"-"+temp.getMonth()+"-"+temp.getFullYear();
    // delete customer.CPassword;
    console.log(JSON.stringify(customer));
    // delete customer.
    return this.http
      .post("registeration", JSON.stringify(customer), {headers : this.headers})
      .toPromise()
      // .then(res => res.json() as User)
      .then(res=>{console.log(res.json())
        alert("Registeration Successful");
        // this.router.
      }

    
           
      ) 
      .catch(this.handleError);
  }

  // delete(id: number): Promise<void> {
  //   const url = `${this.customersUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }
// ===============
  
  login( user_id: string, password: string){
    // return this.http.post<any>(this.url+`success`, { user_id: user_id, password: password })
    // .pipe(map(user => {
    //   // user.login is boolean value
    //   if (user!=false) {
    //       localStorage.setItem('currentUser',user_id);
    //   }

    //   return user_id;
    // }));
  }


    
  logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('currentUser');
}

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}