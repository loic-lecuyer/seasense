import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSavComponent } from './panel-sav.component';

describe('PanelSavComponent', () => {
  let component: PanelSavComponent;
  let fixture: ComponentFixture<PanelSavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
