import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideInfoComponent } from './side-info/side-info.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SideInfoComponent,
    MainInfoComponent,
    FooterInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
