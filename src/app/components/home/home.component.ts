import { Product } from './../../Interface/products.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Products: Array<Product> = [
    {
      Name: 'Banana',
      Price: 3,
      Desc: 'Fruit',
      ProductPath: 'assets/Pics/banana.png',
    },
    {
      Name: 'Kiwi',
      Price: 3,
      Desc: 'Fruit',
      ProductPath: 'assets/Pics/kiwi.png',
    },
    {
      Name: 'Orange',
      Price: 3,
      Desc: 'Fruit',
      ProductPath: 'assets/Pics/orange.png',
    },
    {
      Name: 'Strawberry',
      Price: 3,
      Desc: 'Fruit',
      ProductPath: 'assets/Pics/strawberry.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addToCart(index) {
    console.log('Added', this.Products[index]);
  }
}
