import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { OrderProfitChartSummary, OrdersProfitChartData } from '../data/orders-profit-chart';
import { ProfitChart, ProfitChartData } from '../data/profit-chart';

@Injectable()
export class OrdersProfitChartService extends OrdersProfitChartData {

  private summary = [
    {
        title: 'Marketplace',
        value: 3654,
      },
      {
        title: 'Last Month',
        value: 946,
      },
      {
        title: 'Last Week',
        value: 654,
      },
      {
        title: 'Today',
        value: 230,
      },
    ];

  constructor(
              private profitChartService: ProfitChartData) {
    super();
  }

  getOrderProfitChartSummary(): Observable<OrderProfitChartSummary[]> {
    return observableOf(this.summary);
  }


  getProfitChartData(period: string): Observable<ProfitChart> {
    return observableOf(this.profitChartService.getProfitChartData(period));
  }
}
