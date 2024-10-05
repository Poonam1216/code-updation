import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card  class="card-border">
      <div class="icon-container-{{ type }} icon-card-border">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title ">{{ title }}</div>
        <div class="status ">{{ valueNumber }}</div>
      </div>
    </nb-card>
  `,
})

//(click)="on = !on"
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() valueNumber : string;
}
