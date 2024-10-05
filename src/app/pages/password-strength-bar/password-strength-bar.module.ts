import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthBarComponent } from './password-strength-bar.component'

@NgModule({
  declarations: [PasswordStrengthBarComponent],
  imports: [
    CommonModule
  ], exports: [
    PasswordStrengthBarComponent
  ]
})
export class PasswordStrengthBarModule { }
