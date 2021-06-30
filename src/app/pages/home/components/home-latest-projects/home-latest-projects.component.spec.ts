import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLatestProjectsComponent } from './home-latest-projects.component';

describe('HomeLatestProjectsComponent', () => {
  let component: HomeLatestProjectsComponent;
  let fixture: ComponentFixture<HomeLatestProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLatestProjectsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLatestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
