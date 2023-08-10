import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  URL: string;

  constructor(private http:HttpClient) {
    this.URL="https://koder-troop-server.vercel.app"
   }

   addTask(task:Task) : Observable<Task>{
    return  this.http.post <Task>(this.URL+"/todo/add", task);
   }


   getTask() : Observable<Task[]>{
    return  this.http.get <Task[]>(this.URL+"/todo");
   }

   deleteTask(task:Task) : Observable<Task>{
    return  this.http.delete <Task>(this.URL+"/todo/delete/"+ task._id);
   }

   editTask(task:Task) : Observable<Task>{
    let id = localStorage.getItem("edit_id")
    return  this.http.put <Task>(this.URL+"/todo/"+id, task);
   }

   updatestatusTask(task:Task) : Observable<Task>{
    let id = localStorage.getItem("status_id")
    return  this.http.put <Task>(this.URL+"/todo/imp/"+id, {imp:task});
   }
}
