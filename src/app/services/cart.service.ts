import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private fs: AngularFirestore, private as: AuthService) {}

  addToCart(Product) {
    return this.fs.collection(`users/${this.as.userId}/cart`).add(Product);
  }
}
