import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {
  private userEmail: String = null;
  private userLoggedIn: boolean = false;
  constructor(private firebaseAuth: AngularFireAuth) { }

  googleLogin() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then((result) => {
      const user = result.user;
      this.userEmail = user.email;
      this.userLoggedIn = true;
      console.log('User logged in with email: ' + this.userEmail);
    });
  }

  logout() {
    return this.firebaseAuth.auth.signOut().then(() => {
      this.userLoggedIn = false;
      this.userEmail = null;
      console.log('User has been logged out. Current user email is:' + this.userEmail);
    });
  }

  isLoggedIn(): boolean {
    return this.userLoggedIn;
  }
}
