import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products : Product[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get("https://portfolio-angular-43274-default-rtdb.firebaseio.com/products_idx.json")
    .subscribe( ( response: Product[] ) => {
      console.log(response);
      this.products = response;

      setTimeout( () => {
        this.loading = false;

      }, 2000);
    })
  }
}
