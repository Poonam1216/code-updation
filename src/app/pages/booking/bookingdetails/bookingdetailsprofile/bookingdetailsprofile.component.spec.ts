import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookingdetailsprofileComponent } from './bookingdetailsprofile.component';

describe('BookingdetailsprofileComponent', () => {
  let component: BookingdetailsprofileComponent;
  let fixture: ComponentFixture<BookingdetailsprofileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingdetailsprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingdetailsprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
