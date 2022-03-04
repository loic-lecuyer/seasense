import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSliderComponent } from './async-slider.component';

describe('AsyncSliderComponent', () => {
  let component: AsyncSliderComponent;
  let fixture: ComponentFixture<AsyncSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
