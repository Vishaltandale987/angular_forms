import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import {NgxPaginationModule} from 'ngx-pagination';
import { NavbarComponent } from './navbar/navbar.component';
import { NewFormComponent } from './new-form/new-form.component';
import { LeaveFormComponent } from './leave-app/leave-form/leave-form.component';
import { AddminPanelComponent } from './leave-app/addmin-panel/addmin-panel.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { NotfoundComponent } from './navbar/notfound/notfound.component';
import { TodoComponent } from './form/todo/todo.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    NewFormComponent,
    LeaveFormComponent,
    AddminPanelComponent,
    SignInComponent,
    SignUpComponent,
    NotfoundComponent,
    TodoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,NgxPaginationModule,ToastrModule.forRoot(),  BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
