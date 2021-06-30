import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBuiltTechComponent } from './home-built-tech.component';

describe('HomeBuiltTechComponent', () => {
  let component: HomeBuiltTechComponent;
  let fixture: ComponentFixture<HomeBuiltTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBuiltTechComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBuiltTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
