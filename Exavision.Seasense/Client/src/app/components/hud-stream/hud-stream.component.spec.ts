import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudStreamComponent } from './hud-stream.component';

describe('HudStreamComponent', () => {
  let component: HudStreamComponent;
  let fixture: ComponentFixture<HudStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HudStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HudStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
