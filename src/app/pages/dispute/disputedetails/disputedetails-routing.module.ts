import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisputedetailsComponent } from './disputedetails.component';
import { DisputeprofileComponent } from './disputeprofile/disputeprofile.component'
import { AuthGaurdService } from '../../../service/auth-gaurd.service';

const routes: Routes = [{
  path: '',
  component: DisputeprofileComponent,
  canActivate: [AuthGaurdService],
  children:[    {
      path: ':Id', 
      component: DisputeprofileComponent,
    },{
      path: '', redirectTo: 'direct', pathMatch: 'full'
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisputeDetailsRoutingModule {
}
