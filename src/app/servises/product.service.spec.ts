import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Shelf } from '../interfaces/shelf';

import { RackService } from './product.service';

describe('RackService', () => {
  let service: RackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule]
    });
    service = TestBed.inject(RackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xdescribe("getPrimaryRack",()=>{
    it("test real reqest",()=>{
      service.getPrimaryRack().subscribe((data:Shelf[])=>{
        console.log(data);
      })
      expect(true).toBeTruthy();
    })
  })

  
});
