import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Http client
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules
import {PagesModule} from "./pages/pages.module";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      AppRoutingModule,
      RouterModule,
      BrowserModule,
      PagesModule, 
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
