import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOwnerPageComponent } from './order-owner-page.component';

describe('OrderOwnerPageComponent', () => {
  let component: OrderOwnerPageComponent;
  let fixture: ComponentFixture<OrderOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderOwnerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
