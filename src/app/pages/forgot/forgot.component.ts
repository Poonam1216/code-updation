import { Component, OnInit } from '@angular/core';
import { WebapiserviceService } from '../../service/webapiservice.service';
import { NbToastrService, NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgot_text: string = '';
  check_textbox: boolean = false;
  textMessage: string = 'Please fill up email address';
  checkButtonRes: boolean;

  constructor(
    private api: WebapiserviceService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<ForgotComponent>
  ) { }

  ngOnInit() {
    this.checkButtonRes = false;
  }

  confirmForgot() {
    if(this.forgot_text != '') {
      this.checkButtonRes = true;
      this.api.post('/forgetadminpass', {email: this.forgot_text}).subscribe( (res: any) => {
        let getres = res.json();
        this.checkButtonRes = false;
        this.check_textbox = false;
        if(getres.status) {
          this.showToast('top-right', 'success', getres.message);
          this.ref.close();
        } else {
          this.showToast('top-right', 'info', getres.message);
        }
      });
    }  else {
      this.textMessage = 'Please fill up email address';
      this.check_textbox = true;
    }
  }

  showToast(position, status, message) {
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }

  dismiss() {
    this.ref.close();
  }

}
