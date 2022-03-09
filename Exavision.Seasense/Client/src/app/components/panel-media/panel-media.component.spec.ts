import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMediaComponent } from './panel-media.component';

describe('PanelMediaComponent', () => {
  let component: PanelMediaComponent;
  let fixture: ComponentFixture<PanelMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
