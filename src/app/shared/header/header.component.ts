import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public pageDataService: PageDataService,
               private router: Router) { }

  ngOnInit(): void {
  }

  searchProducts( input: string ){

    if(input.length < 1) return;

    this.router.navigate(['/search', input]);
    console.log(input);
  }
}
