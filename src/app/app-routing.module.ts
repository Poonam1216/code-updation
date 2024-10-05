import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
// import { HouseownerdetailsComponent } from './pages/houseowner/houseownerdetails/houseownerdetails.component';
import { LoginComponent } from './pages/login/login.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ConfirmpasswordComponent } from './pages/login/confirmpassword/confirmpassword.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { 
    path: 'login', 
    component: LoginComponent,
  },
  {
    path:'confirmpassword/:token',
    component:ConfirmpasswordComponent
  },
  { 
    path: 'changepassword/:id', 
    component: ChangepasswordComponent 
  },
  {
    path:'details',
    loadChildren: () => import('./pages/houseowner/houseownerdetails/houseownerdetails.module')
    .then(m => m.HouseownerdetailsModule),
  },
  {
    path:'car-details',
    loadChildren: () => import('./pages/carowner/carownerdetails/carownerdetails.module')
    .then(m => m.CarownerdetailsModule),
  },
  {
    path:'booking-details',
    loadChildren: () => import('./pages/booking/bookingdetails/bookingdetails.module')
    .then(m => m.BookingdetailsModule),
  },
  {
    path:'dispute-details',
    loadChildren: () => import('./pages/dispute/disputedetails/disputedetails.module')
    .then(m => m.DisputedetailsModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
    useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
