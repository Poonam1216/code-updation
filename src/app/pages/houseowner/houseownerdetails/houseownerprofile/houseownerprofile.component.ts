import { Component, OnInit, Injectable } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { Router, NavigationEnd } from '@angular/router';
import { WebapiserviceService } from '../../../../service/webapiservice.service';
import {environment} from '../../../../../environments/environment'
import { Location } from '@angular/common';
@Component({
  selector: 'ngx-houseownerprofile',
  templateUrl: './houseownerprofile.component.html',
  styleUrls: ['./houseownerprofile.component.scss']
})



export class HouseownerprofileComponent implements OnInit {
profileData: any={};
imgUrl:any = environment.url.imgUrl;
bankDetails:any =  {
  bankcode: '',
  bankName: '',
  bankCode: '',
  accountNumber: '',
  accountName: ''
};
  constructor(private _location: Location, private api:WebapiserviceService, private router: Router, private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerSvgPack('housepark', {
      'profile': '<img src="assets/housedetailsicons/name_ic.svg">',
      'email': '<img src="assets/housedetailsicons/email_ic.svg">',
      'mobile': '<img src="assets/housedetailsicons/mobile_ic.svg">',
      'cake': '<img src="assets/housedetailsicons/date_of_birth_ic.svg">',
      'address': '<img src="assets/housedetailsicons/address_ic.svg">',
      'arrow': '<img src="assets/housedetailsicons/back_ic.svg">',
      'bankName': '<img src="assets/housedetailsicons/bank_name_ic.svg">',
      'AccountNumb': '<img src="assets/housedetailsicons/account_number_ic.svg">',
      'AccountName': '<img src="assets/housedetailsicons/account_holder_name_ic.svg">',
      'bankCode': '<img src="assets/housedetailsicons/bank_code_ic.svg">',
      'parking-location': '<img src="assets/housedetailsicons/location_ic.svg">',
      'distension': '<img src="assets/housedetailsicons/distension_ic.svg">',
      'car-round': '<img src="assets/housedetailsicons/car_ic.svg">',
    });
    let url = this.router.url.split('/')[2]
    this.profile(url);
  }

  profile(id) {
    this.api.post('/houseownerprofile',{"Id":id}).subscribe((res:any={}) => {
      this.profileData = res.json().data;
      this.profileData.address = this.profileData.address.trim();
      this.bankDetails = (this.profileData.bankdetail == null)? this.bankDetails: this.profileData.bankdetail;
    })
  };

  backPage() {
		this._location.back();
  } 
  ngOnInit() {
  }

}
