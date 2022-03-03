import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCameraComponent } from './panel-camera.component';

describe('PanelCameraComponent', () => {
  let component: PanelCameraComponent;
  let fixture: ComponentFixture<PanelCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
