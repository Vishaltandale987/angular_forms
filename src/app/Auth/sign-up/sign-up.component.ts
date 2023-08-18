import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { signUp_check_password } from 'src/app/validators/validators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  constructor(private router: Router,private toastr: ToastrService) {}


  signup_validation_form = new FormGroup({
    frist_name:new FormControl("",[Validators.required, Validators.minLength(2) ]),
    last_name:new FormControl("",[Validators.required, Validators.minLength(2) ]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    confirmation_password: new FormControl("", [Validators.required,   Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
  },[signUp_check_password("password","confirmation_password")])



  get valid_frist_name(){
    return this.signup_validation_form.get("frist_name")
  }

  get valid_last_name(){
    return this.signup_validation_form.get("last_name")
  }

  get valid_email(){
    return this.signup_validation_form.get("email")
  }

  get valid_password(){
    return this.signup_validation_form.get("password")
  }

  get valid_confirmation_password(){
    return this.signup_validation_form.get("confirmation_password")
  }


  submit_handle_signup_form(){
    const signup_data_object = this.signup_validation_form.value
    


    let get_signup_Data = sessionStorage.getItem("sign_up_array");

    let existingData = get_signup_Data ? JSON.parse(get_signup_Data) : [];
  
    existingData.push(signup_data_object);
  
    sessionStorage.setItem("sign_up_array", JSON.stringify(existingData));

    

    
    this.toastr.success(`${signup_data_object.frist_name} ${signup_data_object.last_name} has been Successfully Singup`);



    this. signup_validation_form = new FormGroup({
      frist_name:new FormControl(""),
      last_name:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl(""),
      confirmation_password: new FormControl(""),
    },)

    this.router.navigate(['sign-in'])
  }

}
