import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fauth: AngularFireAuth) {}
  signup(email: string, password: string) {
    return this.fauth.createUserWithEmailAndPassword(email, password);
  }
}
