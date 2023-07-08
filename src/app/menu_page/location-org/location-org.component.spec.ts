import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOrgComponent } from './location-org.component';

describe('LocationOrgComponent', () => {
  let component: LocationOrgComponent;
  let fixture: ComponentFixture<LocationOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
