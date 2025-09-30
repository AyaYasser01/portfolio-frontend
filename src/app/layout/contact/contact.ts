import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from '../../services/global-service';

@Component({
  selector: 'app-contact',
  imports:[ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  constructor(private globalService: GlobalService) {}

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  sendMessage() {
    if (this.contactForm.valid) {
      this.globalService.postContact(this.contactForm.value).subscribe({
        next: (res) => {
          alert('Message sent successfully ✅');
          this.contactForm.reset();
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to send message');
        }
      });
    }
  }
}
