import { Component } from '@angular/core';
import { leave } from 'src/app/model/leave';

@Component({
  selector: 'app-addmin-panel',
  templateUrl: './addmin-panel.component.html',
  styleUrls: ['./addmin-panel.component.css']
})
export class AddminPanelComponent {

  leave_Arr: leave[] = [];

  leave_index :any

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('key'); 
    if (storedData) {
      this.leave_Arr = JSON.parse(storedData);
    }
  }

 


  set_id(id:any){
  
    this.leave_index = id
      
    }
  
    handle_approve(){
      const storedData = sessionStorage.getItem('key');
  
      
    
      if (storedData) {
        const data = JSON.parse(storedData);
    
        const objIndex = data.findIndex((e: any) => e.index === this.leave_index);
  
      
        data[this.leave_index].leave_status = 'APPROVE'
        console.log(data)
        sessionStorage.setItem('key', JSON.stringify(data));
        this.ngOnInit()
        
       
      }
    }


    handle_reject(){
      const storedData = sessionStorage.getItem('key');
  
      
    
      if (storedData) {
        const data = JSON.parse(storedData);
    
        const objIndex = data.findIndex((e: any) => e.index === this.leave_index);
  
      
        data[this.leave_index].leave_status = 'REJECT'
        console.log(data)
        sessionStorage.setItem('key', JSON.stringify(data));
        this.ngOnInit()
        
       
      }
    }


    handle_pending(){
      const storedData = sessionStorage.getItem('key');
  
      
    
      if (storedData) {
        const data = JSON.parse(storedData);
    
        const objIndex = data.findIndex((e: any) => e.index === this.leave_index);
  
      
        data[this.leave_index].leave_status = 'PENDING'
        console.log(data)
        sessionStorage.setItem('key', JSON.stringify(data));
        this.ngOnInit()
        
       
      }
    }
}
