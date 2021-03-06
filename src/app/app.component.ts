import { Component } from '@angular/core';
import { PageDataService } from './services/page-data.service'
import { ProductsService } from './services/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor( public pageDataService : PageDataService,
               public productsService : ProductsService) {
    
  }
}
