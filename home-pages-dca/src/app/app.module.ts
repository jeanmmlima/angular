import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideInfoComponent } from './side-info/side-info.component';

import { FooterInfoComponent } from './footer-info/footer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SideInfoComponent,
    FooterInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
