import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from './services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.sass']
})
export class NewsletterComponent implements OnInit {

  public subscription: Subscription;
  newsletterForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private newsletterService: NewsletterService) {
    this.newsletterForm = fb.group({
      name: ['',
        [
          Validators.required,
          Validators.maxLength(30)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
    });
  }

  ngOnInit() {
  }

  get f() {
    return this.newsletterForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newsletterForm.invalid) {
      return;
    }

    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.newsletterForm.value));

    const user = {
      name: this.newsletterForm.value.name,
      email: this.newsletterForm.value.email
    };

    this.subscription = this.newsletterService.sendEmail(user).
      subscribe(data => {
        // const msg = data.message;
        alert(data);
      }, error => {
        console.error(error, 'error');
      });
  }
}
