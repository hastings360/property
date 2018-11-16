import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { MailerService } from './mailer.service';
import { StripeService } from './stripe.service';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { PicsComponent } from './pics/pics.component';
import { PricesComponent } from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';
import { AvailabilityComponent } from './availability/availability.component';
import { FooterComponent } from './footer/footer.component';
import { StripeComponent } from './stripe/stripe.component';
import { HomeComponent } from './home/home.component';
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
    StripeComponent,
    HomeComponent,
    PayComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [MailerService, StripeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
