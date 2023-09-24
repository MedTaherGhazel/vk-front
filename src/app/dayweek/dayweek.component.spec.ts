import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayweekComponent } from './dayweek.component';

describe('DayweekComponent', () => {
  let component: DayweekComponent;
  let fixture: ComponentFixture<DayweekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayweekComponent]
    });
    fixture = TestBed.createComponent(DayweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
