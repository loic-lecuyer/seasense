import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudCheckComponent } from './hud-check.component';

describe('HudCheckComponent', () => {
  let component: HudCheckComponent;
  let fixture: ComponentFixture<HudCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
