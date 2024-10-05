import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BookingdetailsComponent } from './bookingdetails.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbTabsetModule, NbMenuModule, NbLayoutModule, NbSelectModule, NbButtonModule } from '@nebular/theme';
import { BookingdetailsprofileComponent } from './bookingdetailsprofile/bookingdetailsprofile.component';
import { BookingDetailsRoutingModule } from './bookingdetails-routing.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { RatingModule } from 'ng-starrating';


@NgModule({
  declarations: [BookingdetailsComponent, BookingdetailsprofileComponent],
  imports: [
    BookingDetailsRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    NbLayoutModule,
    NbSelectModule,
    NbButtonModule,
    NgxUsefulSwiperModule,
    RatingModule,
  ],schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
})
export class BookingdetailsModule { }

