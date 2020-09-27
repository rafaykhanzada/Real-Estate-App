
import { Component, OnInit } from '@angular/core';
import { IProp } from '../IProp';
import { HousingService } from '../Services/housing.service';

@Component({
  selector: 'app-Porperty-list',
  templateUrl: './Porperty-list.component.html',
  styleUrls: ['./Porperty-list.component.css']
})
export class PorpertyListComponent implements OnInit {


  Property:Array<IProp>;

  constructor(private housing : HousingService) { }

  ngOnInit() {
  //  this.http.get('Data/Properties.json').subscribe(

    //  data=>this.Property=data
this.housing.GetAll().subscribe(
  data=>{
    this.Property=data;
    console.log(data);
  }
)


  }

}
