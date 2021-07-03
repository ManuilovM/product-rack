import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackStateComponent } from './rack-state.component';

describe('RackStateComponent', () => {
  let component: RackStateComponent;
  let fixture: ComponentFixture<RackStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RackStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
