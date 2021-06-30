import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExtendCoreComponent } from './home-extend-core.component';

describe('HomeExtendCoreComponent', () => {
  let component: HomeExtendCoreComponent;
  let fixture: ComponentFixture<HomeExtendCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeExtendCoreComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExtendCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
