import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicainManagmentComponent } from './technicain-managment.component';

describe('TechnicainManagmentComponent', () => {
  let component: TechnicainManagmentComponent;
  let fixture: ComponentFixture<TechnicainManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicainManagmentComponent]
    });
    fixture = TestBed.createComponent(TechnicainManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
