import { Component } from '@angular/core';
import { leave } from 'src/app/model/leave';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent {


  leave_Arr: leave[] = [];

  leave_index :any



 

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('key'); 
    if (storedData) {
      this.leave_Arr = JSON.parse(storedData);
    }
  }
 
  leave_validation_form = new FormGroup({
    employee_name:new FormControl("",[Validators.required, Validators.minLength(3) ]),
    employee_id:new FormControl("",[Validators.required, Validators.minLength(3) ]),
    start_date:new FormControl("",[Validators.required, Validators.minLength(3) ]), 
    end_date: new FormControl("",[Validators.required, Validators.minLength(3) ]),
    leave_reason:new FormControl("",[Validators.required, Validators.minLength(3) ]),
    leave_status:new FormControl("pending",[Validators.required, Validators.minLength(3) ]),
  })


  leave_submit_Form() {  

    let leave_data_object = this.leave_validation_form.value

    let storedData = sessionStorage.getItem("key");

    let existingData = storedData ? JSON.parse(storedData) : [];
  
    existingData.push(leave_data_object);
  
    sessionStorage.setItem("key", JSON.stringify(existingData));

    this.ngOnInit()

    this.leave_validation_form = new FormGroup({
      employee_name:new FormControl(""),
      employee_id:new FormControl(""),
      start_date:new FormControl(""), 
      end_date: new FormControl(""),
      leave_reason:new FormControl(""),
      leave_status:new FormControl("PENDING",[Validators.required, Validators.minLength(3) ]),
    })
    

    alert("Leave appliction has been successfully submited.")

  }




  get valid_employee_name(){
    return this.leave_validation_form.get("employee_name")
  }

  get valid_employee_id(){
    return this.leave_validation_form.get("employee_id")
  }

  get valid_start_date(){
    return this.leave_validation_form.get("start_date")
  }

  get valid_end_date(){
    return this.leave_validation_form.get("end_date")
  }

  get valid_leave_reason(){
    return this.leave_validation_form.get("leave_reason")
  }

  get valid_leave_status(){
    return this.leave_validation_form.get("leave_status")
  }


  


  set_id(id:any){
  
  this.leave_index = id
    
  }

 


}

