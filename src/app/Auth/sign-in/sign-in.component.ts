import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private router: Router) { }


  signin_validation_form = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(2)]),
  })

       


  submit_handle_signin_form() {
    let auth = false;
    const signin_data = this.signin_validation_form.value;
    let get_signup_Data = sessionStorage.getItem("sign_up_array");
  
    if (get_signup_Data !== null) {
      try {
        const signupDataArray = JSON.parse(get_signup_Data);
  
        for (let i = 0; i < signupDataArray.length; i++) {
          if (signupDataArray[i].email === signin_data.email && signupDataArray[i].confirmation_password === signin_data.password) {
            auth = true;
            alert("Successfully Signin");
            const existingData = true
    sessionStorage.setItem("auth", JSON.stringify(existingData));

            this.router.navigate([''])
            break; // Exit the loop since we found a match


          }else if (signupDataArray[i].email !== signin_data.email){
            alert("Wrong Email");
            
            break; 

          }else if(signupDataArray[i].confirmation_password !== signin_data.password){
            alert("Wrong Password");

            break; 

          }
        }
      } catch (error) {
        console.error("Error parsing sign_up_array JSON:", error);
      }
    } else {
      console.warn("sign_up_array data is not available in sessionStorage.");
    }
  

  }
  


}
