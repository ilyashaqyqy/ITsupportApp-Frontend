import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentManagementComponent } from './admin/equipment-management/equipment-management.component';
import { TicketManagementComponent } from './admin/ticket-management/ticket-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './utilisateur/home/home.component';
import { TicketsComponent } from './utilisateur/tickets/tickets.component';
import { TicketAssignmentComponent } from './admin/ticket-assignment/ticket-assignment.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { PanneManagementComponent } from './admin/panne-management/panne-management.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipmentDialogComponent } from './equipment-dialog/equipment-dialog.component';


import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PanneDialogComponent } from './panne-dialog/panne-dialog.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    EquipmentManagementComponent,
    TicketManagementComponent,
    UserManagementComponent,
    DashboardComponent,
    HomeComponent,
    TicketsComponent,
    TicketAssignmentComponent,
    LoginComponent,
    RegisterComponent,
    PanneManagementComponent,
    EquipmentDialogComponent,
    PanneDialogComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
