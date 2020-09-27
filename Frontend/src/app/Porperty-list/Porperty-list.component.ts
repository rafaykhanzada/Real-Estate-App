
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProp } from '../IProp';
import { HousingService } from '../Services/housing.service';

@Component({
  selector: 'app-Porperty-list',
  templateUrl: './Porperty-list.component.html',
  styleUrls: ['./Porperty-list.component.css']
})
export class PorpertyListComponent implements OnInit {

Propertyfor:boolean;
  Property:Array<IProp>;

  constructor(private housing : HousingService,private route:ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString()){
    //  this.Propertyfor:Number;

    }
  //  this.http.get('Data/Properties.json').subscribe(

    //  data=>this.Property=data
this.housing.GetAll().subscribe(
  data=>{
    this.Property=data;
    console.log(this.route.snapshot.url.toString());
  }
)


  }

}
