import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { check_password } from '../validators/validators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  constructor(private toastr: ToastrService) { }


  validation_form = new FormGroup({
    name:new FormControl("",[Validators.required, Validators.minLength(2) ]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    confirmation_password: new FormControl("", [Validators.required,   Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    mobile_no:new FormControl("",[Validators.required, Validators.pattern('^[0-9]{10}$')]),
    date_time :new FormControl("",[Validators.required]),
  },[check_password("password","confirmation_password")])

  


  handle_form(){
    console.log(this.validation_form.value)
    this.toastr.success('Form submit.');

  }

  submit_new_Form(item: any){
    console.log(item)
  }


  get valid_name(){
    return this.validation_form.get("name")
  }

  get valid_email(){
    return this.validation_form.get("email")
  }

  get valid_password(){
    return this.validation_form.get("password")
  }

  get valid_mobile_no(){
    return this.validation_form.get("mobile_no")
  }

  get valid_date_time(){
    return this.validation_form.get("date_time")
  }


  get valid_confirmation_password(){
    return this.validation_form.get("confirmation_password")
  }
}
