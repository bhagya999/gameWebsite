import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEarningComponent } from './session-earning.component';

describe('SessionEarningComponent', () => {
  let component: SessionEarningComponent;
  let fixture: ComponentFixture<SessionEarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionEarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionEarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
