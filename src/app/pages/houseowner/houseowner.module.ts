import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbSelectModule, NbDatepickerModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { HouseownerComponent } from './houseowerlist/houseowner.component';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';
import { HouseOwnerRoutingModule } from './houseowner-routing.module';
import { FormsModule } from '@angular/forms';


const ENTRY_COMPONENTS = [
  DeleteDialogComponent
];

@NgModule({
 
  declarations: [HouseownerComponent],
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbSelectModule,
    NbDatepickerModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    HouseOwnerRoutingModule,
    FormsModule
  ],

})
export class HouseownerModule { }
