import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsubComponent } from './tsub.component';

describe('TsubComponent', () => {
  let component: TsubComponent;
  let fixture: ComponentFixture<TsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
