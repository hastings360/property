import { Component, AfterViewInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { StripeService } from '../stripe.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements AfterViewInit {

  @Input() formData: any;
  @Output() paymentResults: EventEmitter<string> = new EventEmitter<string>();

  public elements: any;
  public paymentRequest: any;
  public prButton: any;


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
            type: 'default', // 'default' | 'donate' | 'buy',
            theme:  'dark', // 'dark' | 'light' | 'light-outline'
            height: '60px'
          }
        }
      });

      // 4. Create listener
      this.paymentRequest.on('token', async (payment) => {
        this.pmt.submitPayment(payment.token.id, this.formData)
          .then(success => {
              console.log(success);
              this.paymentResults.emit('success');
              payment.complete('success');
          })
          .catch(error => {
            this.paymentResults.emit('fail');
            console.log(error);
            payment.complete('fail');
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
