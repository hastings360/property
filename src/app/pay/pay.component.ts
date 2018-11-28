import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MailerService } from '../mailer.service';

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

  constructor(private fb: FormBuilder, private mail: MailerService) {
    this.payForm = fb.group({
        'amount': ['', Validators.compose([Validators.required])],
        'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'email': ['', Validators.compose([Validators.required, Validators.pattern(/\w+@\w+/)])],
        'reason': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'unit': ['', Validators.compose([Validators.required])],
        'message': ['', Validators.compose([Validators.minLength(4)])],
    });
  }

  ngOnInit() {

  }

  onSubmit(formValue) {
    this.formData = formValue;
    this.formData.label = formValue.unit + formValue.reason;
    this.formData.amount = this.calcAmt(formValue.amount, 'stripe');
    this.paypalUrl = 'https://www.paypal.me/LarryHastings/' + this.calcAmt(formValue.amount, 'paypal');

    this.billingReady = true;
    window.scrollTo(0, 0);
  }

  calcAmt(amt, service) {
    const feeAmt = (amt * 0.029) + amt;

    if (service === 'paypal') {
      return feeAmt;
    } else if (service === 'stripe') {
      if (feeAmt > 9) {
        return feeAmt * 100;
      } else {
        return parseInt(feeAmt.toPrecision(3), 0) * 100;
      }
    }
  }
}
