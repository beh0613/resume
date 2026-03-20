import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
// contact.component.ts
export class Contact {
  emailAddress = 'bearbeh030613@gmail.com';

    openGmail() {
      // Direct link to Gmail compose window for your email
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.emailAddress}`;

      // Opens in a new tab
      window.open(gmailUrl, '_blank');
    }
}
