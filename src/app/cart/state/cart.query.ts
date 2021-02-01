import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CartStore, CartState } from './cart.store';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartQuery extends QueryEntity<CartState, Cart> {

  constructor(protected store: CartStore) {
    super(store);
  }

}
