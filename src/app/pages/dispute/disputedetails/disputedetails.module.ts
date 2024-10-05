import { NgModule } from '@angular/core';
import { DisputedetailsComponent } from './disputedetails.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbTabsetModule, NbMenuModule, NbLayoutModule, NbSelectModule, NbButtonModule } from '@nebular/theme';
import { DisputeDetailsRoutingModule } from './disputedetails-routing.module';
import { DisputeprofileComponent } from './disputeprofile/disputeprofile.component';
import { ngfModule } from 'angular-file';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@NgModule({
  declarations: [DisputedetailsComponent, DisputeprofileComponent],
  imports: [
    DisputeDetailsRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    NbLayoutModule,
    NbSelectModule,
    NbButtonModule,
    ngfModule,
    FormsModule,
    NgxSpinnerModule
  ], providers: [
    NgxSpinnerService,
  ],
})
export class DisputedetailsModule { }
