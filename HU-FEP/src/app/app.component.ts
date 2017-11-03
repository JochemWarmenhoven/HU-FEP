import {Component, OnInit} from '@angular/core';
import { AuthService } from './shared/auth.service';
import * as firebase from 'firebase/app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

  loginWithGoogle() {
    this.auth.googleLogin();
  }
}
