import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavteacherComponent } from './navteacher.component';

describe('NavteacherComponent', () => {
  let component: NavteacherComponent;
  let fixture: ComponentFixture<NavteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
