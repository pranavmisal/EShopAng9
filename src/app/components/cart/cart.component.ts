import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  Shoppingcart: Array<any>;
  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cart.getCart().subscribe((cs) => {
      this.Shoppingcart = cs.map((x) => {
        return {
          id: x.payload.doc.id,
          ...(x.payload.doc.data() as {}),
        };
      });
      console.log(this.Shoppingcart);
    });
  }
}
