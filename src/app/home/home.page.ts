import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  logRatingChange1(rating){
    console.log("changed rating1: ",rating);
  }

  logRatingChange2(rating){
    console.log("changed rating2: ",rating);
  }

}
