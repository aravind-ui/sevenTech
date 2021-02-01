import { ID } from '@datorama/akita';

export interface Cart {
  'id': number;
  'productName': string;
  'unitPrice': number;
  'noOfItems': number;
}

/**
 * A factory function that creates Cart
 */
export function createCart(params: Partial<Cart>) {
  return {

  } as Cart;
}
