import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { WebapiserviceService } from '../../../service/webapiservice.service';

@Component({
  selector: 'ngx-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.scss']
})
export class ConfirmpasswordComponent implements OnInit {
  password_form: any = {new_password: '', confirm_password: ''};
  checkRequiredField: boolean;
  confirmFlag: boolean;
  buttonloader: boolean;
  tokenId: any;
  @ViewChild('confPass', { read: ElementRef }) confPass: ElementRef
  constructor(
    private api: WebapiserviceService,
    private route: Router,
    private toastrService: NbToastrService) { }

  ngOnInit() {
    this.checkRequiredField = false;
    this.confirmFlag = false;
    this.buttonloader = false;
    this.tokenId = this.route.url.split('/')[2];
    this.api.post('/tokenverify', {token : this.tokenId}).subscribe((res: any)=> {
      if(res.status !== true){
        this.route.navigate(['/']);
        // redirect to login
      }
    });
  }

  showToast(position, status, message) {
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }

  SubmitLogin(f : NgForm){
    if(f.valid) {
      if(this.confirmFlag === true){
        this.showToast('top-right', 'info', 'Confirm password not matching')
      } else {
        this.checkRequiredField = false;
        this.buttonloader = true;
        // set header this.tokenId , body this.password_form.new_password
        localStorage.setItem('confirm_token', this.tokenId);
        this.api.post('/resetpassword', { password: this.password_form.new_password }).subscribe((res: any) => {
          let getres = res.json();
          if(getres.status) {
            this.route.navigate(['/login']);
          } else {
            this.buttonloader = false;
            this.showToast('top-right', 'info', getres.message);
          }
        })
      }
    } else {
      this.showToast('top-right', 'info', 'Please fill up all required field')
      this.checkRequiredField = true;
    } 
  }

  modelChanged(event){
    let checkTouch = this.confPass.nativeElement.classList.contains('ng-pristine')
    if(this.password_form.confirm_password !== this.password_form.new_password){
      if(!checkTouch){
        this.confirmFlag = true;
      }
    } else {
      this.confirmFlag = false;
    }
  }

}
