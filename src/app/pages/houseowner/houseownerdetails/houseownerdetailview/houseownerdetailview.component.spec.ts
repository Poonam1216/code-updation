import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HouseownerdetailviewComponent } from './houseownerdetailview.component';

describe('HouseownerdetailviewComponent', () => {
  let component: HouseownerdetailviewComponent;
  let fixture: ComponentFixture<HouseownerdetailviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseownerdetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseownerdetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
