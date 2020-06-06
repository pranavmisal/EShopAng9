import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../products.service';
import { Product } from './../../Interface/products.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  add: number = -1;
  Products: Array<any> = [
    // {
    //   Name: 'Banana',
    //   Price: 3,
    //   Desc: 'Fruit',
    //   ProductPath: 'assets/Pics/banana.png',
    // },
    // {
    //   Name: 'Kiwi',
    //   Price: 3,
    //   Desc: 'Fruit',
    //   ProductPath: 'assets/Pics/kiwi.png',
    // },
    // {
    //   Name: 'Orange',
    //   Price: 3,
    //   Desc: 'Fruit',
    //   ProductPath: 'assets/Pics/orange.png',
    // },
    // {
    //   Name: 'Strawberry',
    //   Price: 3,
    //   Desc: 'Fruit',
    //   ProductPath: 'assets/Pics/strawberry.png',
    // },
  ];

  constructor(private ps: ProductsService, private cart: CartService) {}

  ngOnInit() {
    this.ps.getAllProducts().subscribe((data) => (this.Products = data));
  }

  addToCart(index) {
    this.add = +index;
    console.log('Added', this.Products[index]);
  }

  buy(amount) {
    let selectedProduct = this.Products[this.add];
    let data = {
      name: selectedProduct.Name,
      price: selectedProduct.Price,
      amount: +amount,
    };
    console.log(data);
    this.cart
      .addToCart(data)
      .then(() => (this.add = -1))
      .catch((err) => console.log());
  }
}
