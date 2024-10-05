import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ForgotComponent } from '../forgot/forgot.component';
import { NgForm } from '@angular/forms';
import { WebapiserviceService } from '../../service/webapiservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login_form: any = {email: '', password: ''};
  checkRequiredField: boolean;
  buttonloader: boolean;

  constructor(
    private dialogService: NbDialogService,
    private api: WebapiserviceService,
    private route: Router,
    private toastrService: NbToastrService
  ) {
    if(localStorage.getItem('token') != '') {
      this.route.navigate(['/pages/dashboard']);
    }
   }

  ngOnInit() {
    this.checkRequiredField = false;
    this.buttonloader = false;
  }

  open() {
    this.dialogService.open(ForgotComponent, {
      context: { },
    });
  }

  SubmitLogin(f: NgForm) {
    if(f.valid) {
      this.checkRequiredField = false;
      this.buttonloader = true;
      this.api.post('/adminlogin', {email: f.value.email, password: f.value.password}).subscribe((res: any)=> {
        let getres = res.json();
        if(getres.status) {
          localStorage.setItem('admin_details', JSON.stringify(getres.data));
          localStorage.setItem('token', getres.data.token)
          this.route.navigate(['/pages/dashboard']);
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
