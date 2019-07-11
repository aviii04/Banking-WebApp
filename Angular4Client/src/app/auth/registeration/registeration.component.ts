import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  datasaved=false;
  message: string;
  ref_form_data;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private user_service: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      lastName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(50), Validators.email]],
      aadhar: ['',  [Validators.required,Validators.minLength(12)]],
      phone:['',  [Validators.required,Validators.minLength(10)]],
      date_of_birth:['', Validators.required],
      password:['', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      c_password:['',  [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      gender:['',  [Validators.required,Validators.minLength(3),Validators.maxLength(15)]],

     
      
  });
     
   this.registerForm.controls

  }

  onSubmit(){
      // console.log(this.registerForm.value);
        this.submitted = true;
        // this.ref_form_data=JSON.stringify(this.registerForm.value);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else
           {
            this.loading = true;
            // this.user_service.register(this.registerForm.value);
            this.user_service.register(this.registerForm.value);
            // .then(res=>{this.router.navigate['/login']})
             
            
            // .(
            //   ()=>{
            //     this.datasaved=true;
            //     this.message= "User Created";
            //     this.registerForm.reset();
            //   }
            // )

           }

        // 
        // this.userService.register(this.registerForm.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
  }

  

