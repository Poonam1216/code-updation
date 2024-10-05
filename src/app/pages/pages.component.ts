import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MENU_ITEMS } from './pages-menu';
import { NbIconLibraries,NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu : NbMenuItem[];
  url:any='/pages/dashboard';
  constructor(private iconLibraries: NbIconLibraries , private route:Router) {
    this.iconLibraries.registerSvgPack('housepark', {
      'dashboard': '<img src="assets/svg/dashboard_ic.svg">',
      'houseowner': '<img src="assets/svg/house_owner_ic.svg">',
      'carowner': '<img src="assets/svg/car_owner_ic.svg">',
      'booking':  '<img src="assets/svg/booking_ic.svg">',
      'dispute':  '<img src="assets/svg/dispute_ic.svg">',
    });
    this.route.events.subscribe(res=>{

      if(res instanceof NavigationEnd) {
        this.url = res.url
        if(this.url == "/pages/dashboard") {
          this.iconLibraries.registerSvgPack('housepark', {
            'dashboard': '<img src="assets/svg/dashboard_select_ic.svg">',
            'houseowner': '<img src="assets/svg/house_owner_ic.svg">',
            'carowner': '<img src="assets/svg/car_owner_ic.svg">',
            'booking':  '<img src="assets/svg/booking_ic.svg">',
            'dispute':  '<img src="assets/svg/dispute_ic.svg">',
          });
        }
    
        if(this.url.indexOf("/pages/houseowner") == 0) {
          this.iconLibraries.registerSvgPack('housepark', {
            'dashboard': '<img src="assets/svg/dashboard_ic.svg">',
            'houseowner': '<img src="assets/svg/house_owner_select.svg">',
            'carowner': '<img src="assets/svg/car_owner_ic.svg">',
            'booking':  '<img src="assets/svg/booking_ic.svg">',
            'dispute':  '<img src="assets/svg/dispute_ic.svg">',
          });
        }

        if(this.url.indexOf("/pages/carowner") == 0) {
          this.iconLibraries.registerSvgPack('housepark', {
            'dashboard': '<img src="assets/svg/dashboard_ic.svg">',
            'houseowner': '<img src="assets/svg/house_owner_ic.svg">',
            'carowner': '<img src="assets/svg/car_owner_select_ic.svg">',
            'booking':  '<img src="assets/svg/booking_ic.svg">',
            'dispute':  '<img src="assets/svg/dispute_ic.svg">',
          });
        }

        if(this.url == "/pages/booking") {
          this.iconLibraries.registerSvgPack('housepark', {
            'dashboard': '<img src="assets/svg/dashboard_ic.svg">',
            'houseowner': '<img src="assets/svg/house_owner_ic.svg">',
            'carowner': '<img src="assets/svg/car_owner_ic.svg">',
            'booking':  '<img src="assets/svg/booking_select_ic.svg">',
            'dispute':  '<img src="assets/svg/dispute_ic.svg">',
          });
        }

        if(this.url == "/pages/dispute") {
          this.iconLibraries.registerSvgPack('housepark', {
            'dashboard': '<img src="assets/svg/dashboard_ic.svg">',
            'houseowner': '<img src="assets/svg/house_owner_ic.svg">',
            'carowner': '<img src="assets/svg/car_owner_ic.svg">',
            'booking':  '<img src="assets/svg/booking_ic.svg">',
            'dispute':  '<img src="assets/svg/dispute_select_ic.svg">',
          });
        }

        this.ngOnInit();
      }
    })


  }

  ngOnInit() {
    this.menu = [
      {
        title: 'Dashboard',
        icon: { icon: 'dashboard', pack: 'housepark' },
        link: '/pages/dashboard',
        home: true
      },
      {
        title: 'House Owner',
        icon: { icon: 'houseowner', pack: 'housepark' },
        link: '/pages/houseowner',
      },
      {
        title: 'Car Owner',
        icon: { icon: 'carowner', pack: 'housepark' },
        link: '/pages/carowner',
      },
      {
        title: 'Booking',
        icon: { icon: 'booking', pack: 'housepark' },
        link: '/pages/booking',
      },
      {
        title: 'Dispute',
        icon:  { icon: 'dispute', pack: 'housepark' },
        link: '/pages/dispute',
      },
      // {
      //   title: 'Iot-Dashboard',
      //   icon: 'home-outline',
      //   link: '/pages/iot-dashboard',
      // },
      // {
      //   title: 'FEATURES',
      //   group: true,
      // },
      // {
      //   title: 'Layout',
      //   icon: 'layout-outline',
      //   children: [
      //     {
      //       title: 'Stepper',
      //       link: '/pages/layout/stepper',
      //     },
      //     {
      //       title: 'List',
      //       link: '/pages/layout/list',
      //     },
      //     {
      //       title: 'Infinite List',
      //       link: '/pages/layout/infinite-list',
      //     },
      //     {
      //       title: 'Accordion',
      //       link: '/pages/layout/accordion',
      //     },
      //     {
      //       title: 'Tabs',
      //       pathMatch: 'prefix',
      //       link: '/pages/layout/tabs',
      //     },
      //   ],
      // },
      // {
      //   title: 'Forms',
      //   icon: 'edit-2-outline',
      //   children: [
      //     {
      //       title: 'Form Inputs',
      //       link: '/pages/forms/inputs',
      //     },
      //     {
      //       title: 'Form Layouts',
      //       link: '/pages/forms/layouts',
      //     },
      //     {
      //       title: 'Buttons',
      //       link: '/pages/forms/buttons',
      //     },
      //     {
      //       title: 'Datepicker',
      //       link: '/pages/forms/datepicker',
      //     },
      //   ],
      // },
      // {
      //   title: 'UI Features',
      //   icon: 'keypad-outline',
      //   link: '/pages/ui-features',
      //   children: [
      //     {
      //       title: 'Grid',
      //       link: '/pages/ui-features/grid',
      //     },
      //     {
      //       title: 'Icons',
      //       link: '/pages/ui-features/icons',
      //     },
      //     {
      //       title: 'Typography',
      //       link: '/pages/ui-features/typography',
      //     },
      //     {
      //       title: 'Animated Searches',
      //       link: '/pages/ui-features/search-fields',
      //     },
      //   ],
      // },
      // {
      //   title: 'Modal & Overlays',
      //   icon: 'browser-outline',
      //   children: [
      //     {
      //       title: 'Dialog',
      //       link: '/pages/modal-overlays/dialog',
      //     },
      //     {
      //       title: 'Window',
      //       link: '/pages/modal-overlays/window',
      //     },
      //     {
      //       title: 'Popover',
      //       link: '/pages/modal-overlays/popover',
      //     },
      //     {
      //       title: 'Toastr',
      //       link: '/pages/modal-overlays/toastr',
      //     },
      //     {
      //       title: 'Tooltip',
      //       link: '/pages/modal-overlays/tooltip',
      //     },
      //   ],
      // },
      // {
      //   title: 'Extra Components',
      //   icon: 'message-circle-outline',
      //   children: [
      //     {
      //       title: 'Calendar',
      //       link: '/pages/extra-components/calendar',
      //     },
      //     {
      //       title: 'Progress Bar',
      //       link: '/pages/extra-components/progress-bar',
      //     },
      //     {
      //       title: 'Spinner',
      //       link: '/pages/extra-components/spinner',
      //     },
      //     {
      //       title: 'Alert',
      //       link: '/pages/extra-components/alert',
      //     },
      //     {
      //       title: 'Calendar Kit',
      //       link: '/pages/extra-components/calendar-kit',
      //     },
      //     {
      //       title: 'Chat',
      //       link: '/pages/extra-components/chat',
      //     },
      //   ],
      // },
      // {
      //   title: 'Maps',
      //   icon: 'map-outline',
      //   children: [
      //     {
      //       title: 'Google Maps',
      //       link: '/pages/maps/gmaps',
      //     },
      //     {
      //       title: 'Leaflet Maps',
      //       link: '/pages/maps/leaflet',
      //     },
      //     {
      //       title: 'Bubble Maps',
      //       link: '/pages/maps/bubble',
      //     },
      //     {
      //       title: 'Search Maps',
      //       link: '/pages/maps/searchmap',
      //     },
      //   ],
      // },
      // {
      //   title: 'Charts',
      //   icon: 'pie-chart-outline',
      //   children: [
      //     {
      //       title: 'Echarts',
      //       link: '/pages/charts/echarts',
      //     },
      //     {
      //       title: 'Charts.js',
      //       link: '/pages/charts/chartjs',
      //     },
      //     {
      //       title: 'D3',
      //       link: '/pages/charts/d3',
      //     },
      //   ],
      // },
      // {
      //   title: 'Editors',
      //   icon: 'text-outline',
      //   children: [
      //     {
      //       title: 'TinyMCE',
      //       link: '/pages/editors/tinymce',
      //     },
      //     {
      //       title: 'CKEditor',
      //       link: '/pages/editors/ckeditor',
      //     },
      //   ],
      // },
      // {
      //   title: 'Tables & Data',
      //   icon: 'grid-outline',
      //   children: [
      //     {
      //       title: 'Smart Table',
      //       link: '/pages/tables/smart-table',
      //     },
      //     {
      //       title: 'Tree Grid',
      //       link: '/pages/tables/tree-grid',
      //     },
      //   ],
      // },
      // {
      //   title: 'Miscellaneous',
      //   icon: 'shuffle-2-outline',
      //   children: [
      //     {
      //       title: '404',
      //       link: '/pages/miscellaneous/404',
      //     },
      //   ],
      // },
      // {
      //   title: 'Auth',
      //   icon: 'lock-outline',
      //   children: [
      //     {
      //       title: 'Login',
      //       link: '/auth/login',
      //     },
      //     {
      //       title: 'Register',
      //       link: '/auth/register',
      //     },
      //     {
      //       title: 'Request Password',
      //       link: '/auth/request-password',
      //     },
      //     {
      //       title: 'Reset Password',
      //       link: '/auth/reset-password',
      //     },
      //   ],
      // },
    ];
  }
}
