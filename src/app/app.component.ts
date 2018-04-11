import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {

  products: Product[];
  color: string;
  font: number;
  constructor() {
    this.products = [
      new Product('MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'],
        29.99)
    ]
  }

  productWasSelected(product): void{
    console.log('App',product.name);
  }
  applySetting(color: string, font:number) {
    console.log(color, font);
    this.font = font;
    this.color = 'red';
  }

}
