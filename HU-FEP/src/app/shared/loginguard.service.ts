import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class LoginguardService {

  constructor(private auth: AuthService) { }

  canActivate() {
    return this.auth.isLoggedIn();
  }
}
