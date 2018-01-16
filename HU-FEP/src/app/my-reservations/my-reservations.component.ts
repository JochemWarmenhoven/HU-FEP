import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {
  products$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase, private auth: AuthService) {}

  ngOnInit() {
    this.products$ = this.af.list('/products', {
      query: { orderByChild: 'reservedTo', equalTo: this.auth.getEmail().email }
    });
  }

  cancelOrder(product: any) {
    this.af.object('/products/' + product.$key).update({
      reservedTo: '',
      reservedDate: ''
    });
  }
}
