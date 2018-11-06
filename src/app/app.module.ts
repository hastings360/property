import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { PicsComponent } from './pics/pics.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { AvailabilityComponent } from './availability/availability.component';
import { FooterComponent } from './footer/footer.component';
import { PayComponent } from './pay/pay.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    PicsComponent,
    PricesComponent,
    ContactComponent,
    AvailabilityComponent,
    FooterComponent,
    PayComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
