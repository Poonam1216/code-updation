import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisputeprofileComponent } from './disputeprofile.component';

describe('DisputeprofileComponent', () => {
  let component: DisputeprofileComponent;
  let fixture: ComponentFixture<DisputeprofileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputeprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
