import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AuthService } from '../providers/auth-service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// ### NEW ###
import { AngularFireModule } from 'angularfire2';

// ### NEW ###
export const firebaseConfig = {
  apiKey: 'AIzaSyAczwjvRBR_3Wc5Fhep3-7IJ7n1NTL8nGE',
  authDomain: 'scratchbase.firebaseapp.com',
  databaseURL: 'https://scratchbase.firebaseio.com',
  storageBucket: 'firebase-scratchbase.appspot.com',
  messagingSenderId: '844482761569'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    // ### NEW ###
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [ 
    IonicApp 
  ],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    AuthService
  ]
})
export class AppModule {}
