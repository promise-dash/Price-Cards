import { Component, Input } from '@angular/core';
import { Plan } from '../Plan';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  @Input() plan: Plan;
    
}
