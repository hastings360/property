import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailerService } from '../mailer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public contactForm: FormGroup;
  public received = false;
  public error = false;

  constructor(private fb: FormBuilder, private mail: MailerService) {
    this.contactForm = fb.group({
        'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'email': ['', Validators.compose([Validators.required, Validators.pattern(/\w+@\w+/)])],
        'phone': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern(/[[\D]?\d[\D]?/)])],
        'message': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    });
  }

  onSubmit(formData: FormGroup): void {
    this.mail.sendMail(formData)
      .then(success => {
        console.log(success);
        this.received = true;
      })
      .catch(error => {
        console.log(error);
        this.error = true;
      });
  }
}
