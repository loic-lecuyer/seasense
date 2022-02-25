import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudPanRullerComponent } from './hud-pan-ruller.component';

describe('HudPanRullerComponent', () => {
  let component: HudPanRullerComponent;
  let fixture: ComponentFixture<HudPanRullerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudPanRullerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudPanRullerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
