import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { AdminChangePasswordComponent } from './admin-change-password/admin-change-password.component';
import { FormsModule } from "@angular/forms";
import { PasswordStrengthBarModule } from '../password-strength-bar/password-strength-bar.module';

@NgModule({
  declarations: [DeleteDialogComponent, AdminChangePasswordComponent],
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    PasswordStrengthBarModule,
  ],
  entryComponents: [DeleteDialogComponent, AdminChangePasswordComponent],
})
export class DialogModule { }
