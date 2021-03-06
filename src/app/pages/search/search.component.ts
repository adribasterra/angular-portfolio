import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private router: ActivatedRoute,
               public productsService : ProductsService ) { }

  ngOnInit(): void {

    this.router.params.subscribe(params => {
      console.log(params['input']);
      this.productsService.searchProducts(params['input']);
    })
  }

}
