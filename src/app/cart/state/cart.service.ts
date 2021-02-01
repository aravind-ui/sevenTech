import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { CartStore } from './cart.store';
import { Cart } from './cart.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor(private cartStore: CartStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<Cart[]>('https://api.com').pipe(tap(entities => {
      this.cartStore.set(entities);
    }));
  }

  add(cart: Cart) {
    this.cartStore.add(cart);
  }

  update(id: number, cart: Partial<Cart>) {
    this.cartStore.update(id, cart);
  }

  remove(id: ID) {
    this.cartStore.remove(id);
  }
}
