import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseownerdetailsComponent } from './houseownerdetails.component';
import { ParkingspotComponent } from './parkingspot/parkingspot.component';
import { HouseownerdetailviewComponent } from './houseownerdetailview/houseownerdetailview.component';
import { AuthGaurdService } from '../../../service/auth-gaurd.service';

const routes: Routes = [{
  path: '',
  component: HouseownerdetailsComponent,
  children:[
    {
      path: ':Id', 
      component: HouseownerdetailviewComponent,
      canActivate: [AuthGaurdService],
    },
    {
      path: '', redirectTo: 'direct', pathMatch: 'full',
      canActivate: [AuthGaurdService],
    },
    {
      path:'parking/:Id',
      component: ParkingspotComponent,
      canActivate: [AuthGaurdService],
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseOwnerDetailsRoutingModule {
}
