import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageDataInterface } from '../interfaces/page-data.interface.js';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  data : PageDataInterface = {};
  loaded = false;
  team : any[] = [];

  constructor( private http: HttpClient ) {
    this.loadData();
    console.log("Data loaded");
    this.loadFromFirebase();
  }

  private loadData() {
    //Read from file
    this.http.get('assets/data/data.json')
    .subscribe( (response : PageDataInterface) => {
      this.loaded = true;
      this.data = response;
      // console.log( response['twitter'] );
    });
  }

  private loadFromFirebase(){
    this.http.get('https://portfolio-angular-43274-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (response : any) => {
      this.team = response;
      console.log(this.team);
    });
  }
}
