import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStandardComponent } from './our-standard.component';

describe('OurStandardComponent', () => {
  let component: OurStandardComponent;
  let fixture: ComponentFixture<OurStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
