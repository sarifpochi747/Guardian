import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmitComponent } from './user-submit.component';

describe('UserSubmitComponent', () => {
  let component: UserSubmitComponent;
  let fixture: ComponentFixture<UserSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
