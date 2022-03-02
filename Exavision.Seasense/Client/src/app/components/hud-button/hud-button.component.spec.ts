import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudButtonComponent } from './hud-button.component';

describe('HudButtonComponent', () => {
  let component: HudButtonComponent;
  let fixture: ComponentFixture<HudButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
