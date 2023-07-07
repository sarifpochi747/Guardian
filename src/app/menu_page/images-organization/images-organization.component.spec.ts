import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesOrganizationComponent } from './images-organization.component';

describe('ImagesOrganizationComponent', () => {
  let component: ImagesOrganizationComponent;
  let fixture: ComponentFixture<ImagesOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
