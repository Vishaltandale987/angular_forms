import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NewFormComponent } from './new-form/new-form.component';

const routes: Routes = [{path: 'todo', component: FormComponent },{path: 'form', component: NewFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
