import { Component, OnInit } from '@angular/core';
import { Shelf } from 'src/app/interfaces/shelf';
import { RackService } from 'src/app/servises/product.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-rack',
  templateUrl: './rack.component.html',
  styleUrls: ['./rack.component.scss']
})
export class RackComponent implements OnInit {
  currentRack$: Subject<Shelf[]> = this.rackService.rack;
  productInHand :Product;

  constructor(private rackService: RackService) { }
  
  ngOnInit(): void {
    this.rackService.getPrimaryRack().subscribe({
      next: (rack: Shelf[])=>{ 
        this.rackService.setCurrentRack(rack);
        this.rackService.reliseRack();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  


  onMousedown(event){
   let elem: HTMLElement= event.target;
   let shelfOrder:number = +elem.parentElement.dataset.shelforder;
   this.productInHand  = this.rackService.getProductFromElem(elem);
   let shiftX = event.clientX - elem.getBoundingClientRect().left;
   let shiftY = event.clientY - elem.getBoundingClientRect().top;
 console.log(JSON.stringify(this.productInHand));
   this.rackService.removeProduct(this.productInHand, shelfOrder);
   this.rackService.reliseRack();



  }



}
