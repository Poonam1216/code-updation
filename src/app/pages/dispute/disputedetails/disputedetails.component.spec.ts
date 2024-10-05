import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisputedetailsComponent } from './disputedetails.component';

describe('DisputedetailsComponent', () => {
  let component: DisputedetailsComponent;
  let fixture: ComponentFixture<DisputedetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
