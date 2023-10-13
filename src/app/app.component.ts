import { Component } from '@angular/core';
import { Plan } from './Plan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-1';

  plans: Plan[];

    constructor(){
      this.plans = [
        {
          title: 'Free',
          price: '$0',
          desc: ['10 users uncluded', '2 GB of storage', 'Email support', 'Help center access'],
          buttonText: 'Sign up for free',
          active: true,
        },
        {
          title: 'Pro',
          price: '$15',
          desc: ['20 users uncluded', '10 GB of storage', 'Priority Email support', 'Help center access'],
          buttonText: 'Get started',
          active: false,
        },
        {
          title: 'Enterprise',
          price: '$29',
          desc: ['30 users uncluded', '15 GB of storage', 'Phone and Email support', 'Help center access'],
          buttonText: 'Contact us',
          active: false,
        },
      ]
    }
}
