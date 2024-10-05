import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { CarownerComponent } from './carowner.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CarownerComponent],
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbDatepickerModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    FormsModule
  ]
})
export class CarownerModule { }
