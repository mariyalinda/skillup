import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarkComponent } from './vark.component';

describe('VarkComponent', () => {
  let component: VarkComponent;
  let fixture: ComponentFixture<VarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
