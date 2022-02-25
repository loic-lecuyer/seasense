import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudUiComponent } from './hud-ui.component';

describe('HudUiComponent', () => {
  let component: HudUiComponent;
  let fixture: ComponentFixture<HudUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
