import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  // products$: FirebaseListObservable<any[]>;
  products = [
    {
      name: 'Raspberry Pi',
      reserved: false,
      reservedTo: null,
      isChecked: false
    },
    {
      name: 'Keyboard, Logitech',
      reserved: false,
      reservedTo: null,
      isChecked: false
    }
  ];

  chosenProducts = [];

  constructor(private af: AngularFireDatabase, private auth: AuthService) {}
  ngOnInit() {
    // this.products$ = this.af.list('/products');
  }
  // addProduct(value: string): void {
  //   this.products$.push({ name: value, reserved: false });
  // }

  addToArray(product: FirebaseListObservable<any>) {
    this.chosenProducts.push(product);
    console.log(this.chosenProducts);
  }

  removeFromArray(product: FirebaseListObservable<any>) {
    this.chosenProducts = this.chosenProducts.filter(e => e !== product);
    console.log(this.chosenProducts);
  }

  orderSelectedProducts() {
    // Person's email must be fetched
    // Current date
    // List of products
    console.log(this.auth.getEmail().email);
  }

  confirmOrder() {
    if (confirm('Are you sure you wish to order your current selection?')) {
      this.orderSelectedProducts();
    } else {
      // Nothing for now
    }
  }
}
