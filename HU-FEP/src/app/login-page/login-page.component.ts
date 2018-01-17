import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {}

  loginWithGoogle() {
    this.auth.googleLogin().then(() => {
      window.location.reload();
      this.router.navigate(['dashboard']);
    });
  }
}
