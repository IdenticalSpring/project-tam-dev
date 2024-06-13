import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandStaffPageComponent } from './brand-staff-page.component';

describe('BrandStaffPageComponent', () => {
  let component: BrandStaffPageComponent;
  let fixture: ComponentFixture<BrandStaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandStaffPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
