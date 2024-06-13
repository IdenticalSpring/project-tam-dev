import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStaffPageComponent } from './order-staff-page.component';

describe('OrderStaffPageComponent', () => {
  let component: OrderStaffPageComponent;
  let fixture: ComponentFixture<OrderStaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderStaffPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
