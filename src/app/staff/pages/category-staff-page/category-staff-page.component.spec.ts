import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStaffPageComponent } from './category-staff-page.component';

describe('CategoryStaffPageComponent', () => {
  let component: CategoryStaffPageComponent;
  let fixture: ComponentFixture<CategoryStaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryStaffPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
