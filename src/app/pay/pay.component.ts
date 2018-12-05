import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})

export class PayComponent {

  public payForm: FormGroup;
  public formData: any;
  public paypalUrl: string;

  public billingReady = false;

  public received = false;
  public error = false;

  constructor(fb: FormBuilder) {
    this.payForm = fb.group({
        'amount': ['', Validators.compose([Validators.required])],
        'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'email': ['', Validators.compose([Validators.required, Validators.pattern(/\w+@\w+/)])],
        'reason': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'unit': ['', Validators.compose([Validators.required])],
        'message': ['', Validators.compose([Validators.minLength(4)])]
    });
  }

  onSubmit(formValue) {
    const amount = formValue.amount;
    this.formData = formValue;
    this.formData.label = formValue.unit + formValue.reason;
    this.formData.amount = this.calcAmt(amount, 'stripe');
    this.paypalUrl = 'https://www.paypal.me/LarryHastings/' + this.calcAmt(amount, 'paypal');

    this.billingReady = true;
    window.scrollTo(0, 0);
  }

  calcAmt(amt, service) {
    const total = (amt * 0.029) + amt;

    if (service === 'paypal') {
      return total.toFixed(2);
    } else if (service === 'stripe') {
        if ( total > 999) {
            return total.toPrecision(6) * 100;
        } else if (total > 99) {
            return total.toPrecision(5) * 100;
        } else if (total > 9) {
            return total.toPrecision(4) * 100;
        } else if (total > 0 && total < 10) {
            return total.toPrecision(3) * 100;
        }
    }
  }

  stripeResults(resultsEvent: string) {
    if (resultsEvent === 'success') {
      this.received = true;
    } else if (resultsEvent === 'fail') {
      this.error = true;
    }
    this.billingReady = false;
  }
}
