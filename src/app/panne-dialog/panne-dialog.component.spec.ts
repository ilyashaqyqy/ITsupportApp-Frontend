import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanneDialogComponent } from './panne-dialog.component';

describe('PanneDialogComponent', () => {
  let component: PanneDialogComponent;
  let fixture: ComponentFixture<PanneDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanneDialogComponent]
    });
    fixture = TestBed.createComponent(PanneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
