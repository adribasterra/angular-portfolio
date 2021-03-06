import { Component, OnInit } from '@angular/core';
import { PageDataService } from '../../services/page-data.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public pageDataService: PageDataService ) { }

  ngOnInit(): void {
  }

}
