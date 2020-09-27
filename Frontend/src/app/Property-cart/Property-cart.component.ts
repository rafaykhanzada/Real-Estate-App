import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Property-cart',
  templateUrl: './Property-cart.component.html',
  styleUrls: ['./Property-cart.component.css']
})
export class PropertyCartComponent implements OnInit {
  @Input() propname:any;




  constructor() { }

  ngOnInit() {
  }

}
