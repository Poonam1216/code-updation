import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseownerComponent } from './houseowerlist/houseowner.component';
import { AuthGaurdService } from '../../service/auth-gaurd.service';

const routes: Routes = [{
  path: '',
  component: HouseownerComponent,
  canActivate: [AuthGaurdService],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseOwnerRoutingModule {
}
