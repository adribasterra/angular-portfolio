import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date : number = new Date().getFullYear();

  constructor( public pageDataService: PageDataService ) { }

  ngOnInit(): void {
  }

}
