import { Component } from '@angular/core';
import { leave } from 'src/app/model/leave';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent {

  constructor(private toastr: ToastrService) {}

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
    leave_status:new FormControl("PENDING",[Validators.required, Validators.minLength(3) ]),
    days_difference:new FormControl("")
  })


  leave_submit_Form() {  

    
    let leave_data_object = this.leave_validation_form.value;

    const startDateStr = leave_data_object.start_date;
    const endDateStr = leave_data_object.end_date;
  
    if (startDateStr && endDateStr) {
      const startDate: Date = new Date(startDateStr);
      const endDate: Date = new Date(endDateStr);
    
      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
        const daysDifference: number = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        leave_data_object.days_difference = daysDifference.toString();
      } else {
        console.error("Invalid date format");
      }
    } else {
      console.error("Start date or end date is missing");
    }
  

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
    days_difference:new FormControl("")

    })
    
    this.toastr.success("Leave application has been successfully submited.");


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

