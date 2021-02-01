import { Component, OnInit } from '@angular/core';
import { CartQuery } from '../cart/state/cart.query';
import { CartService } from '../cart/state/cart.service';
import { ApiService } from '../core/services';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  subTotal: number = 0;
  itemFromCart: any;

  constructor(
    private apiService: ApiService,
    private addToCardSerive: CartService,
    private checkInCart: CartQuery
  ) { }

  ngOnInit(): void {
    this.apiService.getServiceMessage.subscribe((data: any) => {
      this.subTotal = 0;
      const allAddedItems = this.checkInCart.getAll();
      allAddedItems.forEach(data => {
        this.subTotal += data.noOfItems * data.unitPrice;
      });
      this.itemFromCart = allAddedItems;
    });
  }
  removeItem(item: any, index: number) {
    console.log(item, index);
    this.addToCardSerive.remove(item.id);
    this.apiService.setServiceMessageFn();
  }
}
