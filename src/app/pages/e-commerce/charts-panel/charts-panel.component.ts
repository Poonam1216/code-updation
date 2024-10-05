import { Component, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';


import { ProfitChartComponent } from './charts/profit-chart.component';

import { ProfitChart } from '../../../@core/data/profit-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../../../@core/data/orders-profit-chart';
import { WebapiserviceService } from '../../../service/webapiservice.service';

@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent implements OnDestroy {

  private alive = true;
  private summary = [
    {
      title: 'Total Booking',
      value: 0,
    },
    {
      title: 'Last Month',
      value: 0,
    },
    {
      title: 'Today',
      value: 0,
    },
  ];
  chartPanelSummary: OrderProfitChartSummary[];
  period: string = 'week';

  profitChartData: ProfitChart;
  showSpinner: any;


  @ViewChild('profitChart', { static: true }) profitChart: ProfitChartComponent;

  constructor(
    private ordersProfitChartService: OrdersProfitChartData,
    private api: WebapiserviceService) {
    this.chartPanelSummary = this.summary;
    this.showSpinner = false;
    this.getProfitChartData(this.period);
    this.getBookingCount();
  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getProfitChartData(value);
  }

  changeTab(selectedTab) {
    if (selectedTab.tabTitle === 'Profit') {
      this.profitChart.resizeChart();
    }
  }

  getBookingCount() {
    this.showSpinner = true;
    this.api.get('/bookingCount').subscribe((res: any) => {
      let getData = res.json();
      this.showSpinner = false;
      if(getData.status) {
        this.chartPanelSummary = [{
            title: 'Total Booking',
            value: getData.data[0].totalbooking,
          }, {
            title: 'Last Month',
            value: getData.data[0].previousbooking,
          }, {
            title: 'Today',
            value: getData.data[0].todaybooking,
          }];
      }
    })

  }

  getProfitChartData(period: string) {
    this.showSpinner = true;
    if(period === 'week') {
      this.api.get('/weekdashGrph').subscribe((res: any) => {
        let getResponseData = res.json();
        if(getResponseData.status) {
          getResponseData = getResponseData.data;
          const weekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

          const dailyArray = [0, 0, 0, 0, 0, 0, 0];
          const bokingArray = [];
          const cancelArray = [];
          for(let weekDetails of getResponseData) {
            bokingArray.push(weekDetails.totalbooking);
            cancelArray.push(weekDetails.cancelbooking);
          }

          const pushWeekData = [];
          pushWeekData.push(bokingArray);
          pushWeekData.push(cancelArray);
          pushWeekData.push(dailyArray);

          const finalWeekArray = {chartLabel: weekArray, data: pushWeekData};
          this.profitChartData = finalWeekArray;
          setTimeout(() => {
            this.showSpinner = false;
          }, 500);
        }
      });
    } else if(period === 'month') {
      this.api.get('/monthdashGrph').subscribe((res: any) => {
        let getResponseData = res.json();
        let getMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        if(getResponseData.status) {
          getResponseData = getResponseData.data;

          const dailyArray = [0, 0, 0, 0, 0, 0, 0];
          const bokingArray = [];
          const cancelArray = [];
          for(let weekDetails of getResponseData) {
            bokingArray.push(weekDetails.totalbooking);
            cancelArray.push(weekDetails.cancelbooking);
          }
          
          const pushWeekData = [];
          pushWeekData.push(bokingArray);
          pushWeekData.push(cancelArray);
          pushWeekData.push(dailyArray);

          const finalWeekArray = {chartLabel: getMonth, data: pushWeekData};
          this.profitChartData = finalWeekArray;
          setTimeout(() => {
            this.showSpinner = false;
          }, 500);
        }
      });
    } else if(period === 'year') {
      this.api.get('/yeardashGrph').subscribe((res: any) => {
        let getResponseData = res.json();
        getResponseData = getResponseData.data;

        let todayDate: any = new Date();
        todayDate = todayDate.getFullYear();
        const lastSevenYears = todayDate - 7;

        const getYears = [];
        for(let i = todayDate; i >=  lastSevenYears; i--) {
          getYears.push(i);
        }
        
        const dailyArray = [0, 0, 0, 0, 0, 0, 0];
          const bokingArray = [];
          const cancelArray = [];
          for(let weekDetails of getResponseData) {
            bokingArray.push(weekDetails.totalbooking);
            cancelArray.push(weekDetails.cancelbooking);
          }
          
          const pushWeekData = [];
          pushWeekData.push(bokingArray);
          pushWeekData.push(cancelArray);
          pushWeekData.push(dailyArray);

          const finalWeekArray = {chartLabel: getYears, data: pushWeekData};
          this.profitChartData = finalWeekArray;
          setTimeout(() => {
            this.showSpinner = false;
          }, 500);
      });
    }
    
    this.ordersProfitChartService.getProfitChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(profitChartData => {
        this.profitChartData = profitChartData;
    });
      
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
