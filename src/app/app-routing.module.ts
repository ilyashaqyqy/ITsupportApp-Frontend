import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './utilisateur/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EquipmentManagementComponent } from './admin/equipment-management/equipment-management.component';
import { PanneManagementComponent } from './admin/panne-management/panne-management.component';
import { TicketManagementComponent } from './admin/ticket-management/ticket-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { AuthGuard } from './guards/auth.guard';
import { UserTicketComponent } from './user/user-ticket/user-ticket.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-ticket', component: UserTicketComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  
  // Admin routes
  { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/equipment', component: EquipmentManagementComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/panne', component: PanneManagementComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/tickets', component: TicketManagementComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/users', component: UserManagementComponent, canActivate: [AuthGuard, AdminGuard] },

  // Redirect to login if the route is not found
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }