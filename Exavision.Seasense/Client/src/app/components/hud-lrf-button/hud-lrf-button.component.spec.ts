import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudLrfButtonComponent } from './hud-lrf-button.component';

describe('HudLrfButtonComponent', () => {
  let component: HudLrfButtonComponent;
  let fixture: ComponentFixture<HudLrfButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudLrfButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudLrfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
