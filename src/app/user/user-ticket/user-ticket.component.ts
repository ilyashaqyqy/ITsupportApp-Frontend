import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { EquipmentService } from '../../services/equipment.service';
import { PanneService } from '../../services/panne.service';
import { AuthService } from '../../services/auth.service';
import { Equipement } from 'src/app/models/equipement.model';
import { Panne } from 'src/app/models/panne.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-ticket',
  templateUrl: './user-ticket.component.html',
  styleUrls: ['./user-ticket.component.css']
})
export class UserTicketComponent implements OnInit {
  ticket = {
    utilisateurId: 0,
    equipmentId: 0,
    panneId: 0,
    description: '',
    dateCreation: new Date().toISOString(),
    etat: 'OPEN'
  };

  equipmentList: Equipement[] = [];
  panneList: Panne[] = [];
  userTickets: any[] = []; // Add this line to store tickets
recentTickets: any;

  constructor(
    private ticketService: TicketService,
    private equipmentService: EquipmentService,
    private panneService: PanneService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadUserId();
    this.loadEquipment();
    this.loadPannes();
    this.loadUserTickets(); // Ensure this is called after user ID is set
  }

  loadUserId(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.ticket.utilisateurId = userId;
      console.log('User ID loaded from AuthService:', userId);
    } else {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        this.ticket.utilisateurId = +storedUserId;
        console.log('User ID loaded from localStorage:', this.ticket.utilisateurId);
      } else {
        console.error('User ID is null');
      }
    }
  }

  loadEquipment(): void {
    this.equipmentService.getEquipments().subscribe(
      (data) => {
        this.equipmentList = data;
      },
      (error) => {
        console.error('Error loading equipment', error);
      }
    );
  }

  loadPannes(): void {
    this.panneService.getPannes().subscribe(
      (data) => {
        this.panneList = data;
      },
      (error) => {
        console.error('Error loading pannes', error);
      }
    );
  }

  loadUserTickets(): void {
    if (this.ticket.utilisateurId) {
      console.log('Loading tickets for User ID:', this.ticket.utilisateurId);
      this.ticketService.getTicketsByUserId(this.ticket.utilisateurId).subscribe(
        (data) => {
          console.log('Tickets fetched successfully:', data);
          this.userTickets = data;
        },
        (error) => {
          console.error('Error loading user tickets', error);
        }
      );
    } else {
      console.error('Cannot load tickets: User ID is null');
    }
  }

  createTicket(): void {
    if (this.ticket.utilisateurId) {
      this.ticketService.createTicket(this.ticket).subscribe(
        (response) => {
          console.log('Ticket created successfully', response);
          this.snackBar.open('Ticket created successfully!', 'Close', { 
            duration: 4000, 
            verticalPosition: 'top',
            
          });
          this.loadUserTickets();
        },
        (error) => {
          console.error('Error creating ticket', error);
          this.snackBar.open('Failed to create ticket. Please try again.', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
          });
        }
      );
    } else {
      console.error('Cannot create ticket: User ID is null');
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
