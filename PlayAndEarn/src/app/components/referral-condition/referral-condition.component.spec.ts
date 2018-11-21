import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralConditionComponent } from './referral-condition.component';

describe('ReferralConditionComponent', () => {
  let component: ReferralConditionComponent;
  let fixture: ComponentFixture<ReferralConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
