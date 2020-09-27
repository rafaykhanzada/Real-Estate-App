import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Property-details',
  templateUrl: './Property-details.component.html',
  styleUrls: ['./Property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
 public PropertyID:number
  constructor(private route:ActivatedRoute ,private router:Router) { }

  ngOnInit() {
    this.PropertyID=Number(this.route.snapshot.params['id']);
  //  this.route.params.subscribe(
    //  (params)=>{
      //  this.PropertyID = +params['id']
      //}
    //)
  }

  Onnext(){
this.PropertyID +=1;
this.router.navigate(['property-details',this.PropertyID]);
  }
}
