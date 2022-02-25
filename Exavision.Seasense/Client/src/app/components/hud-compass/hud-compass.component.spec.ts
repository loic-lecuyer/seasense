import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudCompassComponent } from './hud-compass.component';

describe('HudCompassComponent', () => {
  let component: HudCompassComponent;
  let fixture: ComponentFixture<HudCompassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudCompassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudCompassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
