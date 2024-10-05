import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { UserActivityData, UserActive } from '../../../@core/data/user-activity';
import { WebapiserviceService } from '../../../service/webapiservice.service';

@Component({
  selector: 'ngx-user-activity',
  styleUrls: ['./user-activity.component.scss'],
  templateUrl: './user-activity.component.html',
})
export class ECommerceUserActivityComponent implements OnDestroy, OnInit {

  private alive = true;

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;
  iosvalue: any = 0;
  totalvalue: any = 0;
  previousmonth: any = 0;
  today: any = 0;
  currentmonth: any = 0;

  constructor(private themeService: NbThemeService,
    private userActivityService: UserActivityData,
    private api: WebapiserviceService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });

    this.getUserActivity(this.type);
  }

  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnInit() {
    this.getCommision();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getCommision() {
    this.api.get('/comission').subscribe((res: any) => {
      let commisionValue = res.json().data;
      this.iosvalue = commisionValue[0].commission_percentage;
      this.totalvalue = commisionValue[0].totalcommission;
      this.currentmonth = commisionValue[0].currentMonthcommission;
      this.today = commisionValue[0].todaycommission;
      this.previousmonth = commisionValue[0].previousMonthcommission;
    })
  }
}
