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
    this.formData.amount = (formValue.amount * 0.029) + formValue.amount;
    this.formData.stripeAmount = this.formData.amount * 100;
    console.log(this.formData.stripeAmount);
    this.paypalUrl = 'https://www.paypal.me/LarryHastings/' + this.formData.amount;

    this.billingReady = true;
    window.scrollTo(0, 0);
  }
}
