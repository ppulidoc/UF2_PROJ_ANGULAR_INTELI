import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AssidesComponent } from './assides/assides.component';
import {ContingutComponent} from "./contingut/contingut.component";
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AssideLeftComponent } from './asside-left/asside-left.component';

@NgModule({
  declarations: [
    AppComponent,
    AssidesComponent,
    ContingutComponent,
    CabeceraComponent,
    AssideLeftComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
