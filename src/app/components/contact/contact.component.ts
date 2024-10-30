import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Form Submitted...');
      const currentDate = new Date();
      console.log('Form submitted on:', currentDate);

      console.log('Form Submitted',this.contactForm.value);
      this.contactForm.reset();
    } else {
      // Mark all controls as touched to show validation errors
      this.contactForm.markAllAsTouched();
    }
  }

}
