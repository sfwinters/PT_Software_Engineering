import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesinfoComponent } from './salesinfo/salesinfo.component';
import { HeadingComponent } from './heading/heading.component';
import { MainComponent } from './main/main.component';
import { ButtonsComponent } from './main/buttons/buttons.component';
import { MaintxtComponent } from './main/maintxt/maintxt.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesinfoComponent,
    HeadingComponent,
    MainComponent,
    ButtonsComponent,
    MaintxtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
