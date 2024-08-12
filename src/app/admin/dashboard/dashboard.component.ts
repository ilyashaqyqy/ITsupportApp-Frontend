import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  currentSection: string = 'dashboard';
  menuItems = [
    { section: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { section: 'equipment', label: 'Equipment', icon: 'fas fa-laptop' },
    { section: 'panne', label: 'Faults', icon: 'fas fa-exclamation-triangle' },
    { section: 'tickets', label: 'Tickets', icon: 'fas fa-ticket-alt' },
    { section: 'users', label: 'Users', icon: 'fas fa-users' }
  ];

  dashboardCards = [
    { title: 'Total Equipment', value: '120', link: 'equipment', linkText: 'Manage Equipment' },
    { title: 'Active Faults', value: '5', link: 'panne', linkText: 'View Faults' },
    { title: 'Open Tickets', value: '12', link: 'tickets', linkText: 'Manage Tickets' }
  ];
  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  loadContent(section: string) {
    this.currentSection = section;
  }
}
