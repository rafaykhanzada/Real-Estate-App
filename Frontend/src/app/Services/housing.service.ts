import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProp } from '../IProp';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

GetAll():Observable<IProp[]>{
 return this.http.get('Data/Properties.json').pipe(
   map(data=>{
     const propertyarray:Array<any>=[];
     for(const id in data){
       if(data.hasOwnProperty(id)){
         propertyarray.push(data[id]);
       }
     }
     return propertyarray;
   })
 );
}
}
