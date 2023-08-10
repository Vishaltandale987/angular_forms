import { Component } from '@angular/core';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {

  submit_new_Form(item: any){
    console.log(item)
  }
}
