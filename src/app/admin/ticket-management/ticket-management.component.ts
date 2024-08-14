import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { TechnicienService } from '../../services/technicien.service';
import { TicketSupport } from 'src/app/models/ticket-support.model';
import { Technicien } from 'src/app/models/technicien.model';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.css']
})
export class TicketManagementComponent implements OnInit {
  tickets: TicketSupport[] = [];
  technicians: Technicien[] = [];
  selectedTicketId: number | null = null;
  selectedTechnicienId: number | null = null;
  showAllTickets: boolean = false;

  allTickets: TicketSupport[] = [];
  openTickets: TicketSupport[] = [];

  constructor(
    private ticketService: TicketService,
    private technicienService: TechnicienService
  ) {}

  ngOnInit(): void {
    this.loadTickets();
    this.loadTechnicians();
  }

  loadTickets(): void {
    this.ticketService.getTickets().subscribe(
      (data) => {
        this.allTickets = data; // Store all tickets
        this.openTickets = data.filter(ticket => ticket.etat === 'OPEN');  // Filter open tickets
      },
      (error) => {
        console.error('Error loading tickets', error);
      }
    );
  }

  loadTechnicians(): void {
    this.technicienService.getTechniciens().subscribe(
      (data) => {
        this.technicians = data;
      },
      (error) => {
        console.error('Error loading technicians', error);
      }
    );
  }

  assignTicket(): void {
    if (this.selectedTicketId !== null && this.selectedTechnicienId !== null) {
      this.ticketService.assignTicket(this.selectedTicketId, this.selectedTechnicienId).subscribe(
        (response) => {
          console.log('Ticket assigned successfully', response);
          this.loadTickets(); // Refresh the ticket list
          this.selectedTicketId = null; // Clear selection after assignment
          this.selectedTechnicienId = null; // Clear selection after assignment
        },
        (error) => {
          console.error('Error assigning ticket', error);
        }
      );
    }
  }
}
