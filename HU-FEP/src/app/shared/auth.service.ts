import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  googleLogin() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then((result) => {
      const user = result.user;
      console.log('User logged in with email: ' + user.email);
    });
  }

  logout() {
    console.log('Executing logout. User info:' + this.firebaseAuth.auth.currentUser);
    return this.firebaseAuth.auth.signOut().then(() => {
      // user successfully signed out
      // navigate to homepage
      this.router.navigate(['login']);
      console.log('LOGGED OUT???');
      console.log(this.firebaseAuth.auth.currentUser);
    });
  }

  isAuthenticated() {
    return this.firebaseAuth.auth.currentUser !== null;
  }
}
