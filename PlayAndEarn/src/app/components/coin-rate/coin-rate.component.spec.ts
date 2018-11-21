import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinRateComponent } from './coin-rate.component';

describe('CoinRateComponent', () => {
  let component: CoinRateComponent;
  let fixture: ComponentFixture<CoinRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
