import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../models/equipement.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private apiUrl = 'http://localhost:8082/api/equipements';

  constructor(private http: HttpClient) { }

  // Get all equipment
  getEquipments(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.apiUrl);
  }

  // Get equipment by ID
  getEquipment(id: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.apiUrl}/${id}`);
  }

  // Create new equipment
  createEquipment(equipment: Equipement): Observable<Equipement> {
    return this.http.post<Equipement>(this.apiUrl, equipment, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Update existing equipment
  updateEquipment(equipment: Equipement): Observable<Equipement> {
    return this.http.put<Equipement>(`${this.apiUrl}/${equipment.id}`, equipment, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Delete equipment
  deleteEquipment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
