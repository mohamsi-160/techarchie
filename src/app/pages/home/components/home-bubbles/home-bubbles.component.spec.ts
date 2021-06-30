import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBubblesComponent } from './home-bubbles.component';

describe('HomeBubblesComponent', () => {
  let component: HomeBubblesComponent;
  let fixture: ComponentFixture<HomeBubblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBubblesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
