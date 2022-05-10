import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonesComponent } from './phones/phones.component';
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { ImgPipe } from './img.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    MainComponent,
    PhoneDetailsComponent,
    ImgPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
