import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AddProperty',
  templateUrl: './AddProperty.component.html',
  styleUrls: ['./AddProperty.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  Onback(){
    this.route.navigate(['/']);
  }

}
