import { Subject } from 'rxjs';

export class FibonacciService {
  private products = ['A Book'];
  productsUpdated = new Subject<void>();

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next();
  }

  getProducts(): string[] {
    return [...this.products];
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
    this.productsUpdated.next();
  }
}
