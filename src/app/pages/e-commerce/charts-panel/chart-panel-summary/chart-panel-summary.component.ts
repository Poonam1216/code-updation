import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-chart-panel-summary',
  styleUrls: ['./chart-panel-summary.component.scss'],
  templateUrl: './chart-panel-summary.component.html',
})
export class ChartPanelSummaryComponent {
  @Input() summary: { title: string; value: number }[];
  @Input() type: string = 'week';
  @Output() periodChange = new EventEmitter<string>();
  types: string[] = ['week', 'month', 'year'];

  constructor() {


  }

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }
}

