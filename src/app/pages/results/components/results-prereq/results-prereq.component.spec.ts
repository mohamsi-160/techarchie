import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dc-results-prereq } from './results-prereq.component';

describe('ResultsPrereqComponent', () => {
  let component: ResultsPrereqComponent;
  let fixture: ComponentFixture<ResultsPrereqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsPrereqComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPrereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
