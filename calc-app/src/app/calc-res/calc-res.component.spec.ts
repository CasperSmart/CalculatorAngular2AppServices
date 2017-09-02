import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcResComponent } from './calc-res.component';

describe('CalcResComponent', () => {
  let component: CalcResComponent;
  let fixture: ComponentFixture<CalcResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
