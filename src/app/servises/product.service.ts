import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { Shelf } from '../interfaces/shelf';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { secretKey } from './secretKey';
import { Product } from '../interfaces/product';
import { JsonPrettyPipe } from '../pipes/json-pretty.pipe';


@Injectable({
  providedIn: 'root'
})
export class RackService {
  rack: Subject<Shelf[]> = new Subject<Shelf[]>();
  currentRack: Array<Shelf>;
  secretKey: string = secretKey;

  constructor(private http: HttpClient) {}

  getPrimaryRack():Observable<any>{
    const url = "https://api.jsonbin.io/b/5e6b40e207f1954acedf3427/1"
    return this.http.get(url, { headers: {
      'secret-key' : secretKey,
      'contentType': 'application/json'
   } })
  }

  setCurrentRack(rack:Array<Shelf>){
    this.currentRack = rack;
  }

  reliseRack(){
    this.rack.next(this.currentRack);
  }

  getProductUrl(product:Product):string{
    if(!product) return null
    return product.productUrl
  }

  getProductOrder(product:Product):string{
    if(!product) return null
    return ""+product.productOrder
  }
  
  getProductId(product:Product):string{
    if(!product) return null
    return ""+product.productId
  }

  getProductFromElem(elem):Product{
     return {
      productId: +elem.dataset.productid, 
      productOrder: +elem.dataset.productorder, 
      productUrl: elem.getAttribute("src")
    }
  }

  removeProduct(product:Product, shelfOrder: number){
   let products: Array<Product> =this.currentRack.find((item)=>item.shelfOrder==shelfOrder).products;
   let index :number= products.findIndex((item)=>item.productOrder==product.productOrder);
   products.splice(index, 1);
   if(products.length==0)this.removeShelf(shelfOrder);
   else {
    products = products.map((item, i):Product=>{
       if (i<index) return item 
       else return {productId : item.productId, productUrl: item.productUrl, productOrder: item.productOrder--}
     })
   }
   console.log(JSON.stringify(this.currentRack) );
  }

  removeShelf(shelfOrder: number){
    let rack: Shelf[]= this.currentRack;
    let index :number=  rack.findIndex((item)=>item.shelfOrder==shelfOrder);
    rack.splice(index, 1)
  }

  addProduct(product:Product, shelfOrder: number, productOrder:number){
    
    let shelf: Shelf =this.currentRack.find((item)=>item.shelfOrder==shelfOrder) 
    if (!shelf) {
      this.createShelf(shelfOrder, product);
      return
    }
    if(!productOrder){
      product.productOrder= shelf.products.length+1;
      shelf.products.push(product);
      return
    }
    shelf.products = shelf.products.map((item,i)=>{
      if (i<(productOrder-1)) return item 
      else return {productId : item.productId, productUrl: item.productUrl, productOrder: item.productOrder+1}
    })
    product.productOrder=productOrder
    shelf.products.push(product);
    shelf.products.sort((a,b)=> a.productOrder-b.productOrder);

    console.log(this.currentRack);
  }

  createShelf(shelfOrder:number, product:Product){
    let rack = this.currentRack;
    product.productOrder = 1;
    let shelf: Shelf = {shelfId: rack.length+1, shelfOrder: +shelfOrder, products: [product] }
    rack.push(shelf);
    rack.sort((a,b)=> a.shelfOrder-b.shelfOrder)
  }

}
