import { Component, AfterViewInit, Input, ViewChild, Output } from '@angular/core';
import { StripeService } from '../stripe.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements AfterViewInit {

  @Input() formData: any;
  @Output() paymentResults: EventEmitter = new EventEmitter();

  elements: any;
  paymentRequest: any;
  prButton: any;


  // Used to mount button
  @ViewChild('payElement') payElement;

  constructor(private pmt: StripeService) { }

  ngAfterViewInit() {

      // 1. Instantiate payment object
      this.paymentRequest = this.pmt.stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          amount: this.formData.amount,
          label: this.formData.reason
        },
        requestPayerName: true
      });

      // 2. Init elements - UI
      this.elements = this.pmt.stripe.elements();

      // 3. Create button
      this.prButton = this.elements.create('paymentRequestButton', {
        paymentRequest: this.paymentRequest,
        style: {
          paymentRequestButton: {
            type: 'buy', // 'default' | 'donate' | 'buy',
            theme:  'dark' // 'dark' | 'light' | 'light-outline'
          }
        }
      });

      // 4. Create listener
      this.paymentRequest.on('token', async (payment) => {
        this.paymentRequest(payment.token)
          .then(results => {
              if (results.ok) {
                this.paymentResults.emit('success');
                payment.complete('success');
              } else {
                this.paymentResults.emit('Falure charging card');
                payment.complete('fail');
              }
          })
          .catch(error => {
            this.paymentResults.emit('fail');
            console.log(error + 'Issue connecting to backend server');
          });
      });

      // 5. Mount button async
      this.mountButton();
  }

  async mountButton() {
    const result = await this.paymentRequest.canMakePayment();

    if (result) {
      this.prButton.mount(this.payElement.nativeElement);
    } else {
      console.error('your browser does not support this new feature!');
    }
  }

}
