import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Product } from '../interfaces/product';
import { Shelf } from '../interfaces/shelf';

import { RackService } from './product.service';

describe('RackService', () => {
  let service: RackService;

  let testRack: Shelf[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule]
    });
    service = TestBed.inject(RackService);

    testRack =  [
      {
        "shelfId": 1,
        "shelfOrder": 4,
        "products": [
          {
            "productId": 2,
            "productUrl": "https://dl.dropboxusercontent.com/s/js5a1s35v6kvwvv/4015400892618.png?dl=0",
            "productOrder": 1
          },
          {
            "productId": 1,
            "productUrl": "https://dl.dropboxusercontent.com/s/q5wlprssw8rj56t/4015400881049.png?dl=0",
            "productOrder": 2
          },
          {
            "productId": 3,
            "productUrl": "https://dl.dropboxusercontent.com/s/fyau39o2hmwtx08/4015600800390.png?dl=0",
            "productOrder": 3
          },
          {
            "productId": 3,
            "productUrl": "https://dl.dropboxusercontent.com/s/fyau39o2hmwtx08/4015600800390.png?dl=0",
            "productOrder": 4
          }
        ]
      },
      {
        "shelfId": 2,
        "shelfOrder": 2,
        "products": [
          {
            "productId": 5,
            "productUrl": "https://dl.dropboxusercontent.com/s/ithwstqa6v05hzr/8001090434524.png?dl=0",
            "productOrder": 1
          },
          {
            "productId": 2,
            "productUrl": "https://dl.dropboxusercontent.com/s/js5a1s35v6kvwvv/4015400892618.png?dl=0",
            "productOrder": 2
          },
          {
            "productId": 4,
            "productUrl": "https://dl.dropboxusercontent.com/s/hwu7b6pm2gp0whp/5413149333581.png?dl=0",
            "productOrder": 3
          }
        ]
      },
      {
        "shelfId": 3,
        "shelfOrder": 1,
        "products": [
          {
            "productId": 1,
            "productUrl": "https://dl.dropboxusercontent.com/s/q5wlprssw8rj56t/4015400881049.png?dl=0",
            "productOrder": 1
          }
        ]
      }
    ]  
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
  
  describe("removeProduct",()=>{

    it("should remove product", ()=>{
      let product: Product =          {
        "productId": 2,
        "productUrl": "https://dl.dropboxusercontent.com/s/js5a1s35v6kvwvv/4015400892618.png?dl=0",
        "productOrder": 1
      };
      let shelfOrder:number = 4;
      service.currentRack = testRack;
      service.removeProduct(product, shelfOrder);
      expect(service.currentRack[0].products.length).toEqual(3);
    })

    it("should beCalled service.removeShelf if target shelf has only one product",()=>{
      let product: Product = {
        "productId": 1,
        "productUrl": "https://dl.dropboxusercontent.com/s/q5wlprssw8rj56t/4015400881049.png?dl=0",
        "productOrder": 1
      };
      let shelfOrder:number = 1;
      service.currentRack = testRack;
      spyOn(service, "removeShelf");
      service.removeProduct(product, shelfOrder);
      expect(service.removeShelf).toHaveBeenCalled();
    })
  })

  describe("removeShelf",()=>{
    it("shold remove shelf",()=>{
      service.currentRack = testRack;
      service.removeShelf(4)
      expect(service.currentRack.length).toEqual(2);
    })
  })


  
});
