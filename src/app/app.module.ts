import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentManagementComponent } from './admin/equipment-management/equipment-management.component';
import { TicketManagementComponent } from './admin/ticket-management/ticket-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TicketAssignmentComponent } from './admin/ticket-assignment/ticket-assignment.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanneManagementComponent } from './admin/panne-management/panne-management.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipmentDialogComponent } from './equipment-dialog/equipment-dialog.component';


import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PanneDialogComponent } from './panne-dialog/panne-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserTicketComponent } from './user/user-ticket/user-ticket.component';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TechnicainManagmentComponent } from './admin/technicain-managment/technicain-managment.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentManagementComponent,
    TicketManagementComponent,
    UserManagementComponent,
    DashboardComponent,
    TicketAssignmentComponent,
    LoginComponent,
    RegisterComponent,
    PanneManagementComponent,
    EquipmentDialogComponent,
    PanneDialogComponent,
    UserHomeComponent,
    UserTicketComponent,
    NavbarComponent,
    FooterComponent,
    TechnicainManagmentComponent
   
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
    MatButtonModule,
    MatSelectModule,

    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule, 
    MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
