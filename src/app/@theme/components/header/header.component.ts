import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbDialogService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AdminProfileComponent } from '../../../pages/admin-profile/admin-profile.component';
import { AdminChangePasswordComponent } from '../../../pages/dialog/admin-change-password/admin-change-password.component';
import { WebapiserviceService } from '../../../service/webapiservice.service';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  isNotiShow: boolean = false;
  notiNo: any = 0;
  notires: any = [];
  adminusername: string;
  profileImage: string = './assets/svg/profile_ic.svg';
  @ViewChild('notiEl', { read: ElementRef }) notiEl: ElementRef
  @ViewChild('iconEl', { read: ElementRef }) iconEl: ElementRef

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];
  currentTheme = 'default';
  isModalClose: boolean;

  userMenu = [{ title: 'View Profile' }, { title: 'Change Password' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private _router: Router,
    private dialogService: NbDialogService,
    private api: WebapiserviceService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.adminusername = JSON.parse(localStorage.getItem('admin_details')).name;
    this.isModalClose = true;

    this.api.get("/notificationlist").subscribe((res: any) => {
      const resStatus = res.json()
      if (resStatus.status) {
        this.notires = res.json().data;
        this.notires.reverse();
        this.notires.forEach(el => {
          el.updatedAt = moment(moment(el.updatedAt)).fromNow();;
        });
        this.notiNo = this.notires.length;
        this.spinner.hide();
      } else {
        this.logout();
      }
    });

    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);

    // const { xl } = this.breakpointService.getBreakpointsMap();

    // this.themeService.onMediaQueryChange()
    //   .pipe(
    //     map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
    //     takeUntil(this.destroy$),
    //   )
    //   .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    // this.themeService.onThemeChange()
    //   .pipe(
    //     map(({ name }) => name),
    //     takeUntil(this.destroy$),
    //   )
    //   .subscribe(themeName => this.currentTheme = themeName);
    this.menuService.onItemClick().subscribe((event) => {
      if (event.item.title == 'View Profile') {
        this.openProfileMenu();
      } else if (event.item.title == 'Change Password') {
        this.openChangePasword();
      }
    })
    window.addEventListener('click', e => {
      if (!(this.notiEl.nativeElement.contains(e.target) || this.iconEl.nativeElement.contains(e.target))) {
        this.isNotiShow = false;
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onNotiClick() {
    this.isNotiShow = !this.isNotiShow;
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  markAllRead() {
    this.spinner.show();
    this.api.get("/readnotification").subscribe((res: any) => {
      this.notires = [];
      this.spinner.hide();
    });
  }

  notiRedirect(item, i) {
    this.spinner.show();
    this.api.post("/readnotification_by_id", { Id: item.Id }).subscribe((res: any) => {
      if (res.json().status == true) {
        if (item.title == "New Mortgage") {
          this.spinner.hide();
          this._router.navigateByUrl('/details/parking/' + item.parkingSpotId);
        } else if (item.title == "Dispute") {
          this.api.post("/adminnotificationtype", { notificationId: item.Id }).subscribe((url_res: any) => {
            const getDisputeRes = url_res.json()
            if (getDisputeRes.status) {
              this._router.navigateByUrl('/dispute-details/' + getDisputeRes.message.Id);
            }
          });
        }
      }
    });
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['login'], { replaceUrl: true });
    //window.open('login', '_self');
  }

  openProfileMenu() {
    if(this.isModalClose) {
      this.isModalClose = false;
      this.dialogService.open(AdminProfileComponent)
        .onClose.subscribe((res) => {
          this.isModalClose = true;
          this.adminusername = JSON.parse(localStorage.getItem('admin_details')).name;
        });
    }
  }

  openChangePasword() {
    if(this.isModalClose) {
      this.isModalClose = false;
      this.dialogService.open(AdminChangePasswordComponent).onClose.subscribe((res) => {
        this.isModalClose = true;
      });
    }
  }
}
