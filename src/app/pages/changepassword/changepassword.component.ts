import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ForgotComponent } from '../forgot/forgot.component';
import { NgForm } from '@angular/forms';
import { WebapiserviceService } from '../../service/webapiservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'ngx-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  password_form: any = {new_password: '', confirm_password: ''};
  checkRequiredField: boolean;
  buttonloader: boolean;
  public barLabel: string = "Password strength:"; 

  constructor(
    private dialogService: NbDialogService,
    private api: WebapiserviceService,
    private route: Router,
    private toastrService: NbToastrService
  ) { }

  ngOnInit() {
    this.checkRequiredField = false;
    this.buttonloader = false;
    let getId = this.route.url.split('/')[2];
    localStorage.setItem('admin_forgot', getId)
  }

  open() {
    this.dialogService.open(ForgotComponent, {
      context: { },
    });
  }

  SubmitPassword(f: NgForm) {
    if(f.valid) {
      this.checkRequiredField = false;
      this.buttonloader = true;
      this.api.post('/changePassword', {password: f.value.new_password}).subscribe((res: any)=> {
        let getres = res.json();
        if(getres.status) {
          localStorage.removeItem('admin_forgot');
          this.route.navigate(['/login']);
        } else {
          this.buttonloader = false;
          this.showToast('top-right', 'info', getres.message);
        }
      })
    } else {
      this.showToast('top-right', 'info', 'Please fill up all required field')
      this.checkRequiredField = true;
    } 
  }

  showToast(position, status, message) {
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }
}
