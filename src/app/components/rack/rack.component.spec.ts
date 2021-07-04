import { HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackComponent } from './rack.component';

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


describe('RackComponent', () => {
  let component: RackComponent;
  let fixture: ComponentFixture<RackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientModule],
      declarations: [ RackComponent,
        MockProductsOfShelfPipe,
        MockJsonPrettyPipe,]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
