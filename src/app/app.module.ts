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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    NewFormComponent,
    LeaveFormComponent,
    AddminPanelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
