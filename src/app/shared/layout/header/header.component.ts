import { Component, OnInit } from '@angular/core';
import { CartQuery } from 'src/app/cart/state/cart.query';
import { CartService } from 'src/app/cart/state/cart.service';
import { ApiService } from 'src/app/core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemFromCart: any;
  subTotal = 0;
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
