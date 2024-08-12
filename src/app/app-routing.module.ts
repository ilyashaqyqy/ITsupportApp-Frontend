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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-ticket', component: UserTicketComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  // Admin routes
  { path: 'admin/equipment', component: EquipmentManagementComponent, canActivate: [AuthGuard] },
  { path: 'admin/panne', component: PanneManagementComponent, canActivate: [AuthGuard] },
  { path: 'admin/tickets', component: TicketManagementComponent, canActivate: [AuthGuard] },
  { path: 'admin/users', component: UserManagementComponent, canActivate: [AuthGuard] },

  // Redirect to login if the route is not found
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }