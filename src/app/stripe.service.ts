import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  public stripe = new Stripe(environment.publicKey);

  constructor() { }
}
