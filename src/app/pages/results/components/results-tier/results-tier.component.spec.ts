import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTierComponent } from './results-tier.component';

describe('ResultsTierComponent', () => {
  let component: ResultsTierComponent;
  let fixture: ComponentFixture<ResultsTierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsTierComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
