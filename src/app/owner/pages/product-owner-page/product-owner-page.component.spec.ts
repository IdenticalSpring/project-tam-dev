import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOwnerPageComponent } from './product-owner-page.component';

describe('ProductOwnerPageComponent', () => {
  let component: ProductOwnerPageComponent;
  let fixture: ComponentFixture<ProductOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductOwnerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
