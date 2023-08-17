import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {


  taskobj: Task = new Task();
  p: number = 1;
  taskArr: Task[] = [];

  inProgressTasks: Task[] = [];
  doneTasks: Task[] = [];
  inQaTasks: Task[] = [];
  todoTasks: Task[] = [];
  
  addTaskValue: string = '';
  selectedValue: any = "";

  

  constructor(private crudService: CrudService) {}



  ngOnInit(): void {
    this.taskobj = new Task();
    this.taskArr = [];
    this.getdata();


  this.filterTasksByStatus();
  }


  filterTasksByStatus(): void {
    this.inProgressTasks = this.taskArr.filter(task => task.important === "IN PROGRESS");
    this.doneTasks = this.taskArr.filter(task => task.important === "DONE");
    this.inQaTasks = this.taskArr.filter(task => task.important === "IN QA");
    this.todoTasks = this.taskArr.filter(task => task.important === "TODO");
  }

  editfromdata = new FormGroup({
    task: new FormControl('',[Validators.required,  ]),
    description: new FormControl('',[Validators.required, ]),
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
        this.selectedValue = ""

      },
      (err) => {
        alert('Error');
      }
    );
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
        this.filterTasksByStatus();
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
