import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParkingspotComponent } from './parkingspot.component';

describe('ParkingspotComponent', () => {
  let component: ParkingspotComponent;
  let fixture: ComponentFixture<ParkingspotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingspotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
