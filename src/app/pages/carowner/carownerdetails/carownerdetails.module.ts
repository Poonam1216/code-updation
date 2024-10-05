import { NgModule } from '@angular/core';
import { CarownerdetailsComponent } from './carownerdetails.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbTabsetModule, NbMenuModule, NbLayoutModule, NbSelectModule, NbButtonModule } from '@nebular/theme';
import { CarOwnerDetailsRoutingModule } from './carownerdetails-routing.module';
import { CarownerprofileComponent } from './carownerprofile/carownerprofile.component';

@NgModule({
  declarations: [CarownerdetailsComponent, CarownerprofileComponent],
  imports: [
    CarOwnerDetailsRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    NbLayoutModule,
    NbSelectModule,
    NbButtonModule
  ]
})
export class CarownerdetailsModule { }
