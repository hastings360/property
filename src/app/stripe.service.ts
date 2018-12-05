import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  public stripe = new Stripe(environment.publicKey);

  constructor(private http: HttpClient) { }

  submitPayment(token, formData) {
    formData.token = token;

    return this.http.post('api/stripe', formData).toPromise();
  }
}
