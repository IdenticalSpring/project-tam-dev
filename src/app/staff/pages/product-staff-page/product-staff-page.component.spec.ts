import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStaffPageComponent } from './product-staff-page.component';

describe('ProductStaffPageComponent', () => {
  let component: ProductStaffPageComponent;
  let fixture: ComponentFixture<ProductStaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductStaffPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
