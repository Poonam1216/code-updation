import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarownerComponent } from './carowner.component';

describe('CarownerComponent', () => {
  let component: CarownerComponent;
  let fixture: ComponentFixture<CarownerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
