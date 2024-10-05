import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarownerdetailsComponent } from './carownerdetails.component';
import { CarownerprofileComponent } from './carownerprofile/carownerprofile.component';
import { AuthGaurdService } from '../../../service/auth-gaurd.service';

const routes: Routes = [{
  path: '',
  component: CarownerdetailsComponent,
  children:[    {
      path: ':Id', 
      component: CarownerprofileComponent,
      canActivate: [AuthGaurdService],
    },{
      path: '', 
      redirectTo: 'direct', 
      pathMatch: 'full',
      canActivate: [AuthGaurdService],
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarOwnerDetailsRoutingModule {
}
