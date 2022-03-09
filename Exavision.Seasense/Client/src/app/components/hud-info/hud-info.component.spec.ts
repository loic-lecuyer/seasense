import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudInfoComponent } from './hud-info.component';

describe('HudInfoComponent', () => {
  let component: HudInfoComponent;
  let fixture: ComponentFixture<HudInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
