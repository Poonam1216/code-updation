import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisputeComponent } from './dispute.component';

describe('DisputeComponent', () => {
  let component: DisputeComponent;
  let fixture: ComponentFixture<DisputeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
