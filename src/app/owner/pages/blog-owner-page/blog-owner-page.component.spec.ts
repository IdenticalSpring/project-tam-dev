import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOwnerPageComponent } from './blog-owner-page.component';

describe('BlogOwnerPageComponent', () => {
  let component: BlogOwnerPageComponent;
  let fixture: ComponentFixture<BlogOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogOwnerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
