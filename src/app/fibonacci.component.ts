import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-products',
  templateUrl: './fibonacci.component.html'
})
export class FibonacciComponent implements OnInit, OnDestroy {
  productName = '';
  isDisabled = true;
  previousCalls: string[] = [];
  private productsSubscription: Subscription;

  constructor(private fibonacciService: FibonacciService) {
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit() {
    this.previousCalls = this.fibonacciService.getProducts();
    this.productsSubscription = this.fibonacciService.productsUpdated.subscribe(() => {
      this.previousCalls = this.fibonacciService.getProducts();
    });
  }

  onAddProduct(form: NgForm) {
    // this.products.push(this.productName);
    if (form.valid) {
      // this.products.push(form.value.productName);
      this.fibonacciService.addProduct(form.value.productName);
      this.productName = "";
    }
  }

  onRemoveProduct(productName: string) {
    this.previousCalls = this.previousCalls.filter(p => p !== productName);
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }
}
