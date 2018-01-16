import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }

  loginWithGoogle() {
    this.auth.googleLogin().then(() => {
      this.router.navigate(['dashboard']);
    });
  }
}
