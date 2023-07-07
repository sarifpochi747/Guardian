import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosOrganizationComponent } from './videos-organization.component';

describe('VideosOrganizationComponent', () => {
  let component: VideosOrganizationComponent;
  let fixture: ComponentFixture<VideosOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
