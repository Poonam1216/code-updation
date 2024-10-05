import { Observable } from 'rxjs';

import { ProfitChart  } from './profit-chart';

export interface OrderProfitChartSummary {
  title: string;
  value: number;
}

export abstract class OrdersProfitChartData {
  abstract getOrderProfitChartSummary(): Observable<OrderProfitChartSummary[]>;
  abstract getProfitChartData(period: string): Observable<ProfitChart>;
}
