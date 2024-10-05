import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { WebapiserviceService } from '../../../service/webapiservice.service';

@Component({
  selector: 'ngx-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.scss']
})
export class AdminChangePasswordComponent implements OnInit {
  passwordDetails: any = {};
  public barLabel: string = "Password strength:"; 
  
  constructor(
    protected ref: NbDialogRef<AdminChangePasswordComponent>,
    private api: WebapiserviceService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit() {
    let getDetails = JSON.parse(localStorage.getItem('admin_details'));
    this.passwordDetails = {Id: getDetails.Id, old_password: getDetails.password, password: null, newpassword: '', confirm_password: ''};
  }

  dismiss() {
    this.ref.close(true);
  }

  saveData() {
    if(this.passwordDetails.password != '' && this.passwordDetails.newpassword != '' && this.passwordDetails.confirm_password != '') {
      if(this.passwordDetails.newpassword.length >= 6) {
        if(this.passwordDetails.newpassword === this.passwordDetails.confirm_password) {
          this.api.post('/changeCurrentPassword', { old_password: this.passwordDetails.password, new_password: this.passwordDetails.newpassword }).subscribe((res: any) => {
            const getData = res.json();
            if(getData.status) {
              let getDetails = JSON.parse(localStorage.getItem('admin_details'));
              getDetails['password'] = this.passwordDetails.newpassword;
              localStorage.setItem('admin_details', JSON.stringify(getDetails));
              this.showToast('top-right', 'info', 'Your password is changed.');
              this.ref.close();
            } else {
              this.showToast('top-right', 'info', getData.message);
            }
          });
        } else {
          this.showToast('top-right', 'info', 'Your new password and confirm password does not match.');
        }
      } else {
        this.showToast('top-right', 'info', 'New password min 6 digits required.');
      }
    } else {
      this.showToast('top-right', 'info', 'Please fill up all required field.');
    }
  }
  
  showToast(position, status, message) {
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }

}
