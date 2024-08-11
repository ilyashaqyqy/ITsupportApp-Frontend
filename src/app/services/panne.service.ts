import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panne } from '../models/panne.model';

@Injectable({
  providedIn: 'root'
})
export class PanneService {
  private apiUrl = 'http://localhost:8082/api/pannes';

  constructor(private http: HttpClient) { }

  // Get all pannes
  getPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(this.apiUrl);
  }

  // Get panne by ID
  getPanne(id: number): Observable<Panne> {
    return this.http.get<Panne>(`${this.apiUrl}/${id}`);
  }

  // Create new panne
  createPanne(panne: Panne): Observable<Panne> {
    return this.http.post<Panne>(this.apiUrl, panne, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Update existing panne
  updatePanne(panne: Panne): Observable<Panne> {
    return this.http.put<Panne>(`${this.apiUrl}/${panne.id}`, panne, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Delete panne
  deletePanne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
