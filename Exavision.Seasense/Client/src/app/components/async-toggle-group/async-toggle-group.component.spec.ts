import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncToggleGroupComponent } from './async-toggle-group.component';

describe('AsyncToggleGroupComponent', () => {
  let component: AsyncToggleGroupComponent;
  let fixture: ComponentFixture<AsyncToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncToggleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
