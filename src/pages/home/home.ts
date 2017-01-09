import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/map';

// ### NEW ###
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthService } from '../../providers/auth-service';

export class User {
  username: string
  fullName: string
  nickname: string
  dob: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: FirebaseListObservable<User[]> // ### NEW ###

  constructor(
    private angularFire: AngularFire, 
    private authService: AuthService, 
    public navCtrl: NavController) {
    this.users = this.angularFire.database.list('/users'); // ### NEW ###
  }

  signInWithGoogle(): void {
    this.authService.signInWithGoogle()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    console.log(`Google display name ${this.authService.displayName()}`);
  }
}
