import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RackStateComponent } from './components/rack-state/rack-state.component';
import { RackComponent } from './components/rack/rack.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RackComponent,
        RackStateComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
