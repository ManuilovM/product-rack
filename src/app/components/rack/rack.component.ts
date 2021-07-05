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
    });
    document.ondragstart = function() {
      return false;
    };
  }
  


  onMousedown(event){
   let elem: HTMLElement= event.target;
   let shelfOrderFromDrag:number = +elem.parentElement.dataset.shelforder;
   this.productInHand  = this.rackService.getProductFromElem(elem);
   let shiftX = event.clientX - elem.getBoundingClientRect().left;
   let shiftY = event.clientY - elem.getBoundingClientRect().top;

   elem.style.position = 'absolute';
   elem.style.zIndex = ""+1000;
   document.body.append(elem);

   moveAt(event.pageX, event.pageY);

   function moveAt(pageX, pageY) {
    elem.style.left = pageX - shiftX + 'px';
    elem.style.top = pageY - shiftY + 'px';
   }

   function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
    Array.from(document.getElementsByClassName("product__shelf__hover")).forEach((item)=>{
      item.classList.remove("product__shelf__hover");
    })

    elem.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    elem.hidden = false;

    if(
      Array.from(elemBelow.classList).some((item)=> item=="product")
    ) elemBelow.classList.add("product__shelf__hover");
  }

   document.addEventListener('mousemove', onMouseMove);
   elem.addEventListener("mouseup", onMouseup.bind(this));

    function onMouseup(event) {
      document.removeEventListener('mousemove', onMouseMove);
      elem.removeEventListener('onmouseup', onMouseup);

      elem.hidden = true;
      let elemBelow: Element = document.elementFromPoint(event.clientX, event.clientY);
      elem.hidden = false;
      this.rackService.removeProduct(this.productInHand, shelfOrderFromDrag);
      this.rackService.reliseRack();

      setTimeout(()=>{
        if(
          Array.from(elemBelow.classList).some((item)=> item=="product")
        ){
          let shelfOrder = +elemBelow.closest(".shelf").getAttribute("data-shelforder");
          let productOrder =+elemBelow.getAttribute("data-productOrder");
          
          this.rackService.addProduct(this.productInHand, shelfOrder, productOrder);
          this.rackService.reliseRack();
          return
        }
        
      if(
        Array.from(elemBelow.classList).some((item)=> item=="shelf")
      ){
        let shelfOrder =elemBelow.getAttribute("data-shelforder");
        
        this.rackService.addProduct(this.productInHand, shelfOrder, null);
        this.rackService.reliseRack();
        return
      }

      }, 0)

   };

  }



}
