import { Product } from "./product";

export interface Shelf {
    shelfId: number;
    shelfOrder: number;
    products: Array<Product>
}
