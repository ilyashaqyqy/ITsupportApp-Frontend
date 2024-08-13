import { Component, OnInit } from '@angular/core';
import { TechnicienService } from '../../services/technicien.service';
import { Technicien } from '../../models/technicien.model';

@Component({
  selector: 'app-technicain-managment',
  templateUrl: './technicain-managment.component.html',
  styleUrls: ['./technicain-managment.component.css']
})
export class TechnicainManagmentComponent implements OnInit {
  techniciens: Technicien[] = [];

  constructor(private technicienService: TechnicienService) { }

  ngOnInit(): void {
    this.loadTechniciens();
  }

  loadTechniciens(): void {
    this.technicienService.getTechniciens().subscribe(
      (data) => {
        this.techniciens = data;
      },
      (error) => {
        console.error('Error loading technicians', error);
      }
    );
  }
}
