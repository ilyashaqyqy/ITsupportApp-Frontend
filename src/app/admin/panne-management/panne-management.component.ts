import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Panne } from '../../models/panne.model';
import { PanneService } from '../../services/panne.service';
import { PanneDialogComponent } from '../../panne-dialog/panne-dialog.component';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-panne-management',
  templateUrl: './panne-management.component.html',
  styleUrls: ['./panne-management.component.css']
})
export class PanneManagementComponent implements OnInit {
  pannes: Panne[] = [];
  errorMessage: string | null = null;

  constructor(private panneService: PanneService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadPannes();
  }

  loadPannes(): void {
    this.panneService.getPannes().subscribe(
      (data: Panne[]) => this.pannes = data,
      error => this.errorMessage = 'Error loading pannes'
    );
  }

  openDialog(panne: Panne | null = null): void {
    const dialogRef = this.dialog.open(PanneDialogComponent, {
      width: '400px',
      data: { panne: panne || { id: 0, description: '', status: '', reportDate: new Date(), repairDate: new Date() } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPannes();
      }
    });
  }

  deletePanne(id: number): void {
    if (confirm('Are you sure you want to delete this panne?')) {
      this.panneService.deletePanne(id).subscribe(
        () => this.loadPannes(),
        error => this.errorMessage = 'Error deleting panne'
      );
    }
  }
}