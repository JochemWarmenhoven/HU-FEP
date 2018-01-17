import { Component, OnInit } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-loan-product-page',
  templateUrl: './loan-product-page.component.html',
  styleUrls: ['./loan-product-page.component.css']
})
export class LoanProductPageComponent implements OnInit {
  products$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase, private auth: AuthService) {}

  ngOnInit() {
    this.products$ = this.af.list('/products', {
      query: { orderByChild: 'ready', equalTo: true }
    });
  }

  loanProduct(product: any) {
    this.af.object('/products/' + product.$key).update({
      loaned: true,
      loanedDate: Date.now()
    });
  }

  cancelLoanProduct(product: any) {
    this.af.object('/products/' + product.$key).update({
      loaned: false,
      loanedDate: ''
    });
  }
}
