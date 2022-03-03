import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudRullerPanComponent } from './hud-ruller-pan.component';

describe('HudRullerPanComponent', () => {
  let component: HudRullerPanComponent;
  let fixture: ComponentFixture<HudRullerPanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudRullerPanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudRullerPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
