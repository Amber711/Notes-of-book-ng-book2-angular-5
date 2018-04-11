import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  private currentProduct;
  @Output() onProductSelected: EventEmitter<Product>;
  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(p: Product): void{
    this.currentProduct = p;
    console.log('product clicked:', p);
    this.onProductSelected.emit(p);
  }

  isSelected(product: Product): boolean{
    if(!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }
}
