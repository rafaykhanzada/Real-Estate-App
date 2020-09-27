import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './AddProperty/AddProperty.component';
import { PorpertyListComponent } from './Porperty-list/Porperty-list.component';
import { PropertyDetailsComponent } from './Property-details/Property-details.component';

const routes: Routes = [
  { path:'add-property', component:AddPropertyComponent},
  {path:'',component:PorpertyListComponent},
  {path:'property-details/:id',component:PropertyDetailsComponent}
 // {path:'',component:PorpertyListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
