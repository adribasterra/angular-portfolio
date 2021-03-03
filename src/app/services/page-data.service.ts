import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageDataInterface } from '../interfaces/page-data.interface.js';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  data : PageDataInterface = {};
  loaded = false;

  constructor( private http: HttpClient ) {

    console.log("Data loaded");

    //Read from file
    this.http.get('assets/data/data.json')
      .subscribe( (response : PageDataInterface) => {
        this.loaded = true;
        this.data = response;
        // console.log( response['twitter'] );
      })

  }
}
