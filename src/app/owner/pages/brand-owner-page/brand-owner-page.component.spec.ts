import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandOwnerPageComponent } from './brand-owner-page.component';

describe('BrandOwnerPageComponent', () => {
  let component: BrandOwnerPageComponent;
  let fixture: ComponentFixture<BrandOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandOwnerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
