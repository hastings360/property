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

  public label: string;
  public stripeAmount: number;
  public amount: number;
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
    this.label = formValue.unit + formValue.reason;
    this.stripeAmount = ((formValue.amount * 0.029) + formValue.amount) * 100;
    this.amount = (formValue.amount * 0.029) + formValue.amount;
    console.log(this.amount);
    this.billingReady = true;
    this.paypalUrl = 'https://www.paypal.me/LarryHastings/' + this.amount;
    window.scrollTo(0, 0);
  }
}
