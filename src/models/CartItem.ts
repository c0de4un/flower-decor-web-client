import Product from './Product.ts';

export class CartItem {
  uuid: string;
  price: number;
  count: number;
  product?: Product;
}