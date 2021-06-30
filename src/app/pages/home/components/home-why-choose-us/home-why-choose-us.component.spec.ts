import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhyChooseUsComponent } from './home-why-choose-us.component';

describe('HomeWhyChooseUsComponent', () => {
  let component: HomeWhyChooseUsComponent;
  let fixture: ComponentFixture<HomeWhyChooseUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeWhyChooseUsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
