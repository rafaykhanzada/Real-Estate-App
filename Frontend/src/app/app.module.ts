import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Nav-bar/Nav-bar.component';
import { PropertyCartComponent } from './Property-cart/Property-cart.component';
import { PorpertyListComponent } from './Porperty-list/Porperty-list.component';

@NgModule({
  declarations: [			
    AppComponent,
      NavBarComponent,
      PropertyCartComponent,
      PorpertyListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
