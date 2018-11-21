import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyLeaderboardComponent } from './hourly-leaderboard.component';

describe('HourlyLeaderboardComponent', () => {
  let component: HourlyLeaderboardComponent;
  let fixture: ComponentFixture<HourlyLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
