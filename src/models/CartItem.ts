import Product from './Product.ts';

export default class CartItem {
  uuid: string = '';
  price: number = 0.00;
  count: number = 0;
  product?: Product = undefined;
}