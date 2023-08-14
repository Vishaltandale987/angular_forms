import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NewFormComponent } from './new-form/new-form.component';
import { LeaveFormComponent } from './leave-app/leave-form/leave-form.component';
import { AddminPanelComponent } from './leave-app/addmin-panel/addmin-panel.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'admin-panel', component: AddminPanelComponent },
  { path: 'leave-form', component: LeaveFormComponent },
  { path: 'todo', component: FormComponent },
  { path: 'form', component: NewFormComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
