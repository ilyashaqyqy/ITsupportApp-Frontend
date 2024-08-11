import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PanneService } from '../services/panne.service';
import { Panne } from '../models/panne.model';

@Component({
  selector: 'app-panne-dialog',
  templateUrl: './panne-dialog.component.html',
  styleUrls: ['./panne-dialog.component.css']
})
export class PanneDialogComponent {
  panne: Panne;

  constructor(
    public dialogRef: MatDialogRef<PanneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { panne: Panne },
    private panneService: PanneService
  ) {
    this.panne = data.panne;
  }

  onSave(): void {
    if (this.panne.id) {
      this.panneService.updatePanne(this.panne).subscribe(
        () => this.dialogRef.close(true),
        error => console.error('Error updating panne', error)
      );
    } else {
      this.panneService.createPanne(this.panne).subscribe(
        () => this.dialogRef.close(true),
        error => console.error('Error creating panne', error)
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
