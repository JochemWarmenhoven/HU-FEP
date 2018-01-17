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
  products$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase, private auth: AuthService) {}

  ngOnInit() {
    this.products$ = this.af.list('/products', {
      query: { orderByChild: 'reservedTo', equalTo: '' }
    });
  }

  addProduct(value: string): void {
    this.products$.push({
      name: value,
      reserved: false,
      reservedDate: '',
      reservedTo: '',
      isChecked: false,
      ready: false,
      loaned: false,
      loanedDate: ''
    });
  }

  orderProduct(product: any) {
    console.log(product);
    this.af.object('/products/' + product.$key).update({
      reserved: true,
      reservedTo: this.auth.getEmail().email,
      reservedDate: Date.now()
    });
  }
}
