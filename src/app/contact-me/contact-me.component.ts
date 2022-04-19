import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  contact = {
    name: '',
    email: '',
    message: '',
  };
  post = {
    endPoint: 'https://ali-ahmad-portfolio.de/send_mail.php', // Ex. www.my-domain/sendMail.php
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  successActive: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  onSubmit(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    }
    this.contact = {
      name: '',
      email: '',
      message: '',
    };
  }


  showSending() {
    this.successActive = true;
    setTimeout(() => {
      this.successActive = false;
    }, 1500);
  }

}
