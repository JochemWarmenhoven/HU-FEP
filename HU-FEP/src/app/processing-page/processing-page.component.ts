import { Component, OnInit } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-processing-page',
  templateUrl: './processing-page.component.html',
  styleUrls: ['./processing-page.component.css']
})
export class ProcessingPageComponent implements OnInit {
  products$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase, private auth: AuthService) {}

  ngOnInit() {
    this.products$ = this.af.list('/products', {
      query: { orderByChild: 'reserved', equalTo: true }
    });
  }

  processOrder(product: any) {
    this.af.object('/products/' + product.$key).update({
      ready: true
    });
  }

  cancelProcess(product: any) {
    this.af.object('/products/' + product.$key).update({
      ready: false
    });
  }
}
