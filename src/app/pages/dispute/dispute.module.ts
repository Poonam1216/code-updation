import { NgModule } from '@angular/core';
import { DisputeComponent } from './dispute.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DisputeComponent],
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
export class DisputeModule { }
