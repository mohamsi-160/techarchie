import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dc-wizard-questions } from './wizard-questions.component';

describe('WizardQuestionsComponent', () => {
  let component: WizardQuestionsComponent;
  let fixture: ComponentFixture<WizardQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardQuestionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
