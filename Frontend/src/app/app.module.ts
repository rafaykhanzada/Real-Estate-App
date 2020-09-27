import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ Routes ,Router, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Nav-bar/Nav-bar.component';
import { PropertyCartComponent } from './Property-cart/Property-cart.component';
import { PorpertyListComponent } from './Porperty-list/Porperty-list.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './AddProperty/AddProperty.component';
import { PropertyDetailsComponent } from './Property-details/Property-details.component';
 // const appRoutes:Routes=[
   // { path:'add-property', component:AddPropertyComponent},
    //{path:'',component:PorpertyListComponent}
  //]
@NgModule({
  declarations: [	
    AppComponent,
      NavBarComponent,
      PropertyCartComponent,
      PorpertyListComponent,
      AddPropertyComponent,
      PropertyDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
 //   RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
