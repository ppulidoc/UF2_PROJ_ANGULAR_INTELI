import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {TitolComponent} from "./titol/titol.component";
import {LogoComponent} from "./logo/logo.component";
import { ContingutComponent } from './contingut/contingut.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitolComponent,
    LogoComponent,
    ContingutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
