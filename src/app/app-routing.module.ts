import { authGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NewFormComponent } from './new-form/new-form.component';
import { LeaveFormComponent } from './leave-app/leave-form/leave-form.component';
import { AddminPanelComponent } from './leave-app/addmin-panel/addmin-panel.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { NotfoundComponent } from './navbar/notfound/notfound.component';
import { TodoComponent } from './form/todo/todo.component';


const routes: Routes = [
  { path: '', redirectTo:"/home", pathMatch:"full" },
  { path: 'home',  component: FormComponent },
  { path: 'admin-panel', canActivate:[authGuard], component: AddminPanelComponent },
  { path: 'leave-form', canActivate:[authGuard], component: LeaveFormComponent },
  { path: 'todo', canActivate:[authGuard], component: TodoComponent },
  
  { path: 'form', canActivate:[authGuard], component: NewFormComponent },
  { path: 'sign-in',  component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
