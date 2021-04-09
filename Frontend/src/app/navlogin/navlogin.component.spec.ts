import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavloginComponent } from './navlogin.component';

describe('NavloginComponent', () => {
  let component: NavloginComponent;
  let fixture: ComponentFixture<NavloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
