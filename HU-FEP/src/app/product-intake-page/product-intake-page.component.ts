import { Component, OnInit } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-product-intake-page',
  templateUrl: './product-intake-page.component.html',
  styleUrls: ['./product-intake-page.component.css']
})
export class ProductIntakePageComponent implements OnInit {
  products$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase, private auth: AuthService) {}

  ngOnInit() {
    this.products$ = this.af.list('/products', {
      query: { orderByChild: 'loaned', equalTo: true }
    });
  }

  takeinOrder(product: any) {
    this.af.object('/products/' + product.$key).update({
      reserved: false,
      reservedDate: '',
      reservedTo: '',
      isChecked: false,
      ready: false,
      loaned: false,
      loanedDate: ''
    });
  }
}
