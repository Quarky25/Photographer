import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userMessage = { name: '', email: '', message: ''};

  submitForm() {
    if (this.userMessage.name && this.userMessage.email && this.userMessage.message) {
      console.log('Form Data:', this.userMessage);
      alert('Thank you for reaching out! I will get back to you soon, ' +this.userMessage.name);
    } else {
      alert('Please fill out the form correctly.');
    }
  }
      
    }
  

