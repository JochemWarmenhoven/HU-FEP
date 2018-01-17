import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {}
  adminUUIDs = ['ftHAa5dt9bSRshjIl6oN2Mp50Kq2'];

  googleLogin() {
    return this.firebaseAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        const user = result.user;
        console.log('User logged in with email: ' + user.email);
      });
  }

  logout() {
    console.log(
      'Executing logout. User info:' + this.firebaseAuth.auth.currentUser
    );
    return this.firebaseAuth.auth.signOut().then(() => {
      // user successfully signed out
      // navigate to homepage
      this.router.navigate(['login']);
      window.location.reload();
      console.log(this.firebaseAuth.auth.currentUser);
    });
  }

  isAuthenticated() {
    return this.firebaseAuth.auth.currentUser !== null;
  }

  isAdmin() {
    let success = false;
    if (this.isAuthenticated()) {
      this.adminUUIDs.map(uuid => {
        if (uuid == this.getEmail().uid) {
          success = true;
        }
      });
    }
    return success;
  }

  getEmail() {
    return this.firebaseAuth.auth.currentUser;
  }
}
