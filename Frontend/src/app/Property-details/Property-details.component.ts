import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Property-details',
  templateUrl: './Property-details.component.html',
  styleUrls: ['./Property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
 public PropertyID:number
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
