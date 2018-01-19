import { Component, OnInit } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'app-processing-page',
  templateUrl: './processing-page.component.html',
  styleUrls: ['./processing-page.component.css']
})
export class ProcessingPageComponent implements OnInit {
  products$: FirebaseListObservable<any[]>;

  constructor(
    private af: AngularFireDatabase,
    private auth: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.products$ = this.af.list('/products', {
      query: { orderByChild: 'reserved', equalTo: true }
    });
  }

  processOrder(product: any) {
    this.af.object('/products/' + product.$key).update({
      ready: true
    });
    this.toastrService.success('Order is ready', 'Succes!');
  }

  cancelProcess(product: any) {
    this.af.object('/products/' + product.$key).update({
      ready: false
    });
  }
}
