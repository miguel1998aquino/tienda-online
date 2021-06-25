import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  async logear(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    var credentials = await this.auth.signInWithPopup(provider);
    return credentials
  }

  logout() {
    this.auth.signOut().then(() => {
      console.log('hhh');
    });
  }
}
