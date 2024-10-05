/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbCardModule,
  NbWindowModule,
  NbLayoutModule,
} from '@nebular/theme';
import { DeleteDialogComponent } from './pages/dialog/delete-dialog/delete-dialog.component';
import { DialogModule } from './pages/dialog/dialog.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { FormsModule } from '@angular/forms';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component'
import { HttpModule } from '@angular/http';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
// import { HouseownerdetailsModule } from './pages/houseowner/houseownerdetails/houseownerdetails.module';
import { PasswordStrengthBarModule } from './pages/password-strength-bar/password-strength-bar.module';
import { ConfirmpasswordComponent } from './pages/login/confirmpassword/confirmpassword.component';


@NgModule({
  declarations: [AppComponent, ForgotComponent, ChangepasswordComponent, AdminProfileComponent, LoginComponent, ConfirmpasswordComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    HttpModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    DialogModule,
    FormsModule,
    PasswordStrengthBarModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [ForgotComponent, AdminProfileComponent],
})
export class AppModule {
}
