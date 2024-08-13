import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketSupport } from '../models/ticket-support.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:8082/api/tickets';

  constructor(private http: HttpClient) {}

  createTicket(ticket: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, ticket);
  }

  // assignTicket(ticketId: number, technicianId: number): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/${ticketId}/assign/${technicianId}`, {});
  // }

  assignTicket(ticketId: number, technicianId: number): Observable<TicketSupport> {
    return this.http.put<TicketSupport>(`${this.apiUrl}/${ticketId}/assign/${technicianId}`, {});
  }
  getTickets(): Observable<TicketSupport[]> {
    return this.http.get<TicketSupport[]>(this.apiUrl);
  }
  
}
