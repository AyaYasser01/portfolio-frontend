import { Component, inject, OnInit, signal } from '@angular/core';
import { GlobalService } from '../../services/global-service';
import { IContact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.html',
  styleUrls: ['./contact-admin.css']
})
export class ContactAdmin implements OnInit{
contactData = signal<IContact[]>([]);
  globalService = inject(GlobalService);


  ngOnInit() {
    this.globalService.getContact().subscribe({
      next: (res) => {
        this.contactData.set(res);
      },
      error: (err) => console.log(err)
    });
  }
   deleteContact(id: string) {
    if (confirm("Are you sure you want to delete this message?")) {
      this.globalService.deleteContact(id).subscribe({
        next: () => {
          alert("✅ Message deleted successfully");
          this.contactData.set(this.contactData().filter(c => c._id !== id));
        },
        error: (err) => {
          console.error(err);
          alert("❌ Failed to delete message");
        }
      });
    }
  }
}
