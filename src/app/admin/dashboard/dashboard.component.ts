import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { faTachometerAlt, faLaptop, faExclamationTriangle, faTicketAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  faTachometerAlt = faTachometerAlt;
  faLaptop = faLaptop;
  faExclamationTriangle = faExclamationTriangle;
  faTicketAlt = faTicketAlt;
  faUsers = faUsers;
  isMobileMenuOpen = false;


  currentSection: string = 'dashboard';
  menuItems = [
    { section: 'dashboard', label: 'Dashboard', icon: faTachometerAlt },
    { section: 'equipment', label: 'Equipment', icon: faLaptop },
    { section: 'panne', label: 'Faults', icon: faExclamationTriangle },
    { section: 'tickets', label: 'Tickets', icon: faTicketAlt },
    { section: 'technicain', label: 'Technicians', icon: faUsers }
  ];

  dashboardCards = [
    { title: 'Total Equipment', value: '8', link: 'equipment', linkText: 'Manage Equipment', icon: faLaptop },
    { title: 'Active Faults', value: '5', link: 'panne', linkText: 'View Faults', icon: faExclamationTriangle },
    { title: 'Open Tickets', value: '6', link: 'tickets', linkText: 'Manage Tickets', icon: faTicketAlt }
  ];
  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  loadContent(section: string) {
    this.currentSection = section;
    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  // loadContent(section: string) {
  //   this.currentSection = section;
  // }
}
