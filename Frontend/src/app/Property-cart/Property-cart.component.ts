import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Property-cart',
  templateUrl: './Property-cart.component.html',
  styleUrls: ['./Property-cart.component.css']
})
export class PropertyCartComponent implements OnInit {

     Property:any={
       "id":1,
       "name":"Banglos",
        "type": "House",
        "price":2500
     }


  constructor() { }

  ngOnInit() {
  }

}
