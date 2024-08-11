import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EquipmentService } from '../services/equipment.service';
import { Equipement } from '../models/equipement.model';

@Component({
  selector: 'app-equipment-dialog',
  templateUrl: './equipment-dialog.component.html',
  styleUrls: ['./equipment-dialog.component.css']
})
export class EquipmentDialogComponent implements OnInit {
  equipment: Equipement = { id: 0, name: '', description: '', status: '', location: '', purchaseDate: new Date() };
  isEditing: boolean = false;
  errorMessage: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<EquipmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { equipment?: Equipement },
    private equipmentService: EquipmentService
  ) { }

  ngOnInit(): void {
    if (this.data.equipment) {
      this.equipment = { ...this.data.equipment };
      this.isEditing = true;
    }
  }

  save(): void {
    if (this.isEditing) {
      this.equipmentService.updateEquipment(this.equipment).subscribe(
        () => this.dialogRef.close(true),
        (error: any) => {
          console.error('Error updating equipment', error);
          this.errorMessage = 'Error updating equipment.';
        }
      );
    } else {
      this.equipmentService.createEquipment(this.equipment).subscribe(
        () => this.dialogRef.close(true),
        (error: any) => {
          console.error('Error creating equipment', error);
          this.errorMessage = 'Error creating equipment.';
        }
      );
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
