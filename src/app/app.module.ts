import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarMaldjComponent } from './components/navbar-maldj/navbar-maldj.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMaldjComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
