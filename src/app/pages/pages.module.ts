import { NgModule } from '@angular/core';
import { NbMenuModule, NbDialogModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { BookingModule } from './booking/booking.module';
import { DisputeModule } from './dispute/dispute.module';
import { HouseownerModule } from './houseowner/houseowner.module';
import { CarownerModule } from './carowner/carowner.module';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    BookingModule,
    DisputeModule,
    HouseownerModule,
    CarownerModule,
    NbDialogModule.forRoot()
  ],
  declarations: [
    PagesComponent,
  ],
 // entryComponents: [DeleteDialogComponent],
})
export class PagesModule {
}
