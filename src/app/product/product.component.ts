import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FibonacciService } from '../fibonacci.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName: string;
  @Output() productClicked = new EventEmitter();

  constructor(private productsService: FibonacciService) { }

  ngOnInit() {
  }

  onClicked() {
    // this.productClicked.emit();
    this.productsService.deleteProduct(this.productName);
  }

}
