import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})

export class PayComponent implements OnInit {

  public payForm: FormGroup;
  public received = false;
  public error = false;
  public formData: any;
  public billingReady = false;
  public paypalUrl: string;

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

  ngOnInit() {  }

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
    const fee = amt * 0.029;
    const total = amt + fee;

      if (total > 9) {
          if (service === 'stripe') {
            return total * 100;
          } else if (service === 'paypal') {
            return total;
          }
      } else if (total > 0 && total < 10) {
          if (service === 'stripe') {
            return total.toPrecision(3) * 100;
          } else if (service === 'paypal') {
            return total.toPrecision(3);
          }
      }
    }

  stripeResults(event) {
    console.log(event);
  }
}
