import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { Cart } from '../cart/state/cart.model';
import { CartQuery } from '../cart/state/cart.query';
import { CartService } from '../cart/state/cart.service';
import { ApiService } from '../core/services';
import { AlertDialogService } from '../shared/alert-dialog/alert-dialog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productsList: any;


  constructor(
    private apiService: ApiService,
    private addToCardSerive: CartService,
    private checkInCart: CartQuery,
    private snackbar: MatSnackBar,
    private alert : AlertDialogService
  ) { }

  ngOnInit(): void {
    this.apiService.get().subscribe(response => {
      this.productsList = response.data;
      console.log(this.productsList)
    });
  }


  addToCart(item: any) {
    // debugger;
    const allData = this.checkInCart.getAll();
    if (allData.length > 0) {
      const checkParticularItem = allData.filter(data => data.id === item.id);
      console.log('checkParticularItem', checkParticularItem);
      if (checkParticularItem.length > 0) {
        if (checkParticularItem[0].noOfItems >= item.quantity) {
          this.alert.show('Out of stock', 'Alert');
          return;
        }
        const itemIncrement = checkParticularItem[0].noOfItems + 1;
        this.addToCardSerive.update(item.id, { noOfItems: itemIncrement });
        this.snackbar.open('Item added to cart');
        this.emitValue();
      } else {
        this.addNewItemToCart(item);
      }

    } else {
      this.addNewItemToCart(item);
    }
  }

  addNewItemToCart(item: any) {
    const addingItem: Cart = {
      id: item.id,
      productName: item.name,
      unitPrice: item.price,
      noOfItems: 1
    }
    this.addToCardSerive.add(addingItem);
    this.emitValue();
    this.snackbar.open('Item added to cart.', 'Success', {duration : 200});
  }

  emitValue() {
    this.apiService.setServiceMessageFn();
  }

}
