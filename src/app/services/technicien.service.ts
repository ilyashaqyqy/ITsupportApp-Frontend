import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technicien } from '../models/technicien.model';

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {
  private apiUrl = 'http://localhost:8082/api/techniciens'; 

  constructor(private http: HttpClient) { }

  getTechniciens(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(this.apiUrl);
  }

  getTechnicien(id: number): Observable<Technicien> {
    return this.http.get<Technicien>(`${this.apiUrl}/${id}`);
  }

}
