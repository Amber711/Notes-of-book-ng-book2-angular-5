import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { Product } from '../product.model'
@Component({
  selector: 'app-product-image',
  template: `<img [src]="product.imageUrl" alt="">`,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }

  ngOnInit() {
  }

}
