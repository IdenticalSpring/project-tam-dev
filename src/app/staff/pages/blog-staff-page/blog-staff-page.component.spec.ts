import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStaffPageComponent } from './blog-staff-page.component';

describe('BlogStaffPageComponent', () => {
  let component: BlogStaffPageComponent;
  let fixture: ComponentFixture<BlogStaffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogStaffPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogStaffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
