import { HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';


import { RackStateComponent } from './rack-state.component';

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

describe('RackStateComponent', () => {
  let component: RackStateComponent;
  let fixture: ComponentFixture<RackStateComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports:[ HttpClientModule],
      declarations: [ RackStateComponent,
        MockProductsOfShelfPipe,
        MockJsonPrettyPipe,

      ]
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
