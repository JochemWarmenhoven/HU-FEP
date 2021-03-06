import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {
  products$: FirebaseListObservable<any[]>;

  constructor(
    private af: AngularFireDatabase,
    private auth: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.products$ = this.af.list('/products', {
      query: { orderByChild: 'reservedTo', equalTo: this.auth.getEmail().email }
    });
  }

  cancelOrder(product: any) {
    this.af.object('/products/' + product.$key).update({
      reserved: false,
      reservedDate: '',
      reservedTo: '',
      isChecked: false,
      ready: false,
      loaned: false,
      loanedDate: ''
    });
    this.toastrService.success('Your order has been canceled.', 'Success!');
  }
}
