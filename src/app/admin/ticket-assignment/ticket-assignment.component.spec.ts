import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAssignmentComponent } from './ticket-assignment.component';

describe('TicketAssignmentComponent', () => {
  let component: TicketAssignmentComponent;
  let fixture: ComponentFixture<TicketAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketAssignmentComponent]
    });
    fixture = TestBed.createComponent(TicketAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
