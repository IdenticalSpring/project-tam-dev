import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOwnerPageComponent } from './dashboard-owner-page.component';

describe('DashboardOwnerPageComponent', () => {
  let component: DashboardOwnerPageComponent;
  let fixture: ComponentFixture<DashboardOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardOwnerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
