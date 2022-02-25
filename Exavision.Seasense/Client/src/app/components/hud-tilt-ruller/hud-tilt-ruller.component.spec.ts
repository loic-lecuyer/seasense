import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudTiltRullerComponent } from './hud-tilt-ruller.component';

describe('HudTiltRullerComponent', () => {
  let component: HudTiltRullerComponent;
  let fixture: ComponentFixture<HudTiltRullerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudTiltRullerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudTiltRullerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
