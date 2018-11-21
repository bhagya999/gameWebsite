import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyCardComponent } from './lucky-card.component';

describe('LuckyCardComponent', () => {
  let component: LuckyCardComponent;
  let fixture: ComponentFixture<LuckyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
