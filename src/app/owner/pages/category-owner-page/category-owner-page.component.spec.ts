import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOwnerPageComponent } from './category-owner-page.component';

describe('CategoryOwnerPageComponent', () => {
  let component: CategoryOwnerPageComponent;
  let fixture: ComponentFixture<CategoryOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryOwnerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
