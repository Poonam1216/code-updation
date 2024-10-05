import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingdetailsComponent } from './bookingdetails.component';
import { BookingdetailsprofileComponent } from './bookingdetailsprofile/bookingdetailsprofile.component';
import { AuthGaurdService } from '../../../service/auth-gaurd.service';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGaurdService],
  component: BookingdetailsprofileComponent,
  children:[
    {
      path: ':Id', 
      component: BookingdetailsprofileComponent
    },
    {
      path: '', redirectTo: 'direct', pathMatch: 'full'
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingDetailsRoutingModule {
}
