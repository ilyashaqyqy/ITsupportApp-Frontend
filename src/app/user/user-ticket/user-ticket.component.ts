import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { EquipmentService } from '../../services/equipment.service';
import { PanneService } from '../../services/panne.service';
import { AuthService } from '../../services/auth.service';
import { Equipement } from 'src/app/models/equipement.model';
import { Panne } from 'src/app/models/panne.model';
import { Router } from '@angular/router';

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


  constructor(
    private ticketService: TicketService,
    private equipmentService: EquipmentService,
    private panneService: PanneService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserId();
    this.loadEquipment();
    this.loadPannes();
  }

  // loadUserId(): void {
  //   const userId = this.authService.getUserId();
  //   if (userId) {
  //     this.ticket.utilisateurId = userId;
  //   } else {
  //     console.error('User ID is null');
  //   }
  // }

  loadUserId(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.ticket.utilisateurId = userId;
    } else {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        this.ticket.utilisateurId = +storedUserId; // Convert string to number
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

  createTicket(): void {
    console.log('Creating ticket with User ID:', this.ticket.utilisateurId);
    if (this.ticket.utilisateurId) {
      this.ticketService.createTicket(this.ticket).subscribe(
        (response) => {
          console.log('Ticket created successfully', response);
        },
        (error) => {
          console.error('Error creating ticket', error);
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
