import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';
import { Shelf } from '../interfaces/shelf';

@Pipe({
  name: 'productsOfShelf'
})
export class ProductsOfShelfPipe implements PipeTransform {

  transform(rank:Shelf[], order: number): Product[] {
    if(!rank) return null 
    let shelf:Shelf = rank.find((item)=> item.shelfOrder == order)
    if(!shelf) return null
    return shelf.products
  }

}
