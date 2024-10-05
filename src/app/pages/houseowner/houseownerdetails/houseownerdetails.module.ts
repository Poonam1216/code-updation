import { NgModule } from '@angular/core';
import { HouseownerdetailsComponent } from './houseownerdetails.component';
import { HouseownerprofileComponent } from './houseownerprofile/houseownerprofile.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbTabsetModule, NbMenuModule, NbDialogModule, NbButtonModule, NbLayoutModule, NbTooltipModule } from '@nebular/theme';
import { HouseOwnerDetailsRoutingModule } from './houseownerdetails-routing.module';
import { ParkingspotComponent } from './parkingspot/parkingspot.component';
import { HouseownerdetailviewComponent } from './houseownerdetailview/houseownerdetailview.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [HouseownerdetailsComponent,HouseownerprofileComponent, ParkingspotComponent, HouseownerdetailviewComponent],
  imports: [
    HouseOwnerDetailsRoutingModule,
    NbMenuModule,
    NbButtonModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    NgxUsefulSwiperModule,
    NbDialogModule.forRoot(),
    NbLayoutModule,
    FormsModule,
    NbTooltipModule,
    RatingModule
  ],
  entryComponents:[
  ],
  providers: [
    
  ]
})
export class HouseownerdetailsModule { }
