import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudRullerTiltComponent } from './hud-ruller-tilt.component';

describe('HudRullerTiltComponent', () => {
  let component: HudRullerTiltComponent;
  let fixture: ComponentFixture<HudRullerTiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudRullerTiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudRullerTiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
