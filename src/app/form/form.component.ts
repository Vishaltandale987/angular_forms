import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Task } from '../model/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  
  taskobj: Task = new Task();
  p: number = 1;
  taskArr: Task[] = [];

  
  
  addTaskValue: string = '';
  selectedValue: any = '';


  

  constructor(private crudService: CrudService) {}



  ngOnInit(): void {
    this.taskobj = new Task();
    this.taskArr = [];
    this.getdata();


  }




  editfromdata = new FormGroup({
    task: new FormControl('',[Validators.required, Validators.minLength(3) ]),
    description: new FormControl('',[Validators.required, Validators.minLength(3) ]),
  });

  edits() {
    console.log(this.editfromdata.value);

  }

  editsTask(task: any) {
    localStorage.setItem('edit_id', task._id);

  }

  StatusTask(task: any) {

  
    localStorage.setItem('status_id', task._id);
    this.crudService.updatestatusTask(this.selectedValue).subscribe(
      (res) => {
        this.ngOnInit();
        alert(res);
      },
      (err) => {
        alert('Error');
      }
    );
  }

  submitForm(item: any) {
    let postdata = { ...item, important: 'TODO', userID: '123' };

    this.crudService.addTask(postdata).subscribe(
      (res) => {
        this.ngOnInit();
        alert(res);
      },
      (err) => {
        alert('Error');
      }
    );
    window.location.reload();
  }

  edittForm(item: any) {
    this.crudService.editTask(item).subscribe(
      (res) => {
        this.ngOnInit();

       this.editfromdata = new FormGroup({
          task: new FormControl(''),
          description: new FormControl(''),
        });

        alert(res);
      },
      (err) => {
        alert('edit error');
      }
    );
  }

  getdata() {
    this.crudService.getTask().subscribe(
      (res) => {
        this.taskArr = res;
      },
      (err) => {
        alert('get error');
      }
    );
  }

  deleteTask(etask: Task) {
    this.crudService.deleteTask(etask).subscribe(
      (res) => {
        this.ngOnInit();
        alert(res);
      },
      (err) => {
        alert('delete error');
      }
    );
  }



}
