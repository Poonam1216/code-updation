import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { WebapiserviceService } from '../../service/webapiservice.service';

@Component({
  selector: 'ngx-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  profileDetails: any = {};
  editProfile: boolean = true;

  constructor(
    protected ref: NbDialogRef<AdminProfileComponent>,
    private api: WebapiserviceService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
    this.changeEditStatus();
  }

  dismiss() {
    this.ref.close(true);
  }

  saveProfileData() {
    if (this.profileDetails.name != '' && this.profileDetails.mobile != '') {
      this.api.post('/updateAdminUser', { Id: this.profileDetails.Id, name: this.profileDetails.name, mobile: this.profileDetails.mobile }).subscribe((res) => {
        localStorage.setItem('admin_details', JSON.stringify(this.profileDetails));
        this.showToast('top-right', 'info', 'Your profile has been updated.');
        this.ref.close();
      });
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

  changeEditStatus() {
    this.editProfile = !this.editProfile;
    this.profileDetails = JSON.parse(localStorage.getItem('admin_details'));
  }

}
