import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStaffPageComponent } from './dashboard-staff-page.component';

describe('DashboardStaffPageComponent', () => {
  let component: DashboardStaffPageComponent;
  let fixture: ComponentFixture<DashboardStaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardStaffPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
