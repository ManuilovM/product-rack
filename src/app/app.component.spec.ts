import { HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RackStateComponent } from './components/rack-state/rack-state.component';
import { RackComponent } from './components/rack/rack.component';

@Pipe({name: 'productsOfShelf'})
class MockProductsOfShelfPipe implements PipeTransform {
    transform(value: number): number {
        //Do stuff here, if you want
        return value;
    }
}

@Pipe({name: 'jsonPretty'})
class MockJsonPrettyPipe implements PipeTransform {
    transform(value: number): number {
        //Do stuff here, if you want
        return value;
    }
}


describe('AppComponent', () => {

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports:[ HttpClientModule],
      declarations: [
        AppComponent,
        RackComponent,
        RackStateComponent,
        MockProductsOfShelfPipe,
        MockJsonPrettyPipe,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
