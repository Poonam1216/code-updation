import { NgModule } from '@angular/core';
import { BookingComponent } from './booking.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookingComponent],
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbDatepickerModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    FormsModule,
  ],
})
export class BookingModule { }
