import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private http: HttpClient) { }

  sendMail(formData: FormGroup) {
    return this.http.post('api/contact', formData).toPromise();
  }

}
