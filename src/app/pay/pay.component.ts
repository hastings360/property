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
            return parseInt(total.toPrecision(3), 0) * 100;
          } else if (service === 'paypal') {
            return total;
          }
      }
    }
}
