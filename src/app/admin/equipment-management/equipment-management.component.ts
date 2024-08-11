import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentService } from '../../services/equipment.service';
import { Equipement } from '../../models/equipement.model';
import { EquipmentDialogComponent } from '../../equipment-dialog/equipment-dialog.component';

@Component({
  selector: 'app-equipment-management',
  templateUrl: './equipment-management.component.html',
  styleUrls: ['./equipment-management.component.css']
})
export class EquipmentManagementComponent implements OnInit {
  equipments: Equipement[] = [];
  errorMessage: string | null = null;

  constructor(
    private equipmentService: EquipmentService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadEquipments();
  }

  loadEquipments(): void {
    this.equipmentService.getEquipments().subscribe(
      (data: Equipement[]) => {
        this.equipments = data;
      },
      (error: any) => {
        console.error('Error loading equipment', error);
        this.errorMessage = 'Error loading equipment data.';
      }
    );
  }

  openDialog(equipment?: Equipement): void {
    const dialogRef = this.dialog.open(EquipmentDialogComponent, {
      width: '500px',
      data: { equipment }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadEquipments();
      }
    });
  }

  deleteEquipment(id: number): void {
    if (confirm('Are you sure you want to delete this equipment?')) {
      this.equipmentService.deleteEquipment(id).subscribe(
        () => {
          this.equipments = this.equipments.filter(e => e.id !== id);
        },
        (error: any) => {
          console.error('Error deleting equipment', error);
          this.errorMessage = 'Error deleting equipment.';
        }
      );
    }
  }
}
