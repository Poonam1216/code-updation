import { Component, OnInit, Inject } from '@angular/core';
import { NbIconLibraries, NbDialogService } from '@nebular/theme';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { WebapiserviceService } from '../../../../service/webapiservice.service';
import { environment } from '../../../../../environments/environment';
import { SwiperOptions } from 'swiper';
import { NbToastrService } from '@nebular/theme';
import { Location } from '@angular/common'

@Component({
  selector: 'ngx-parkingspot',
  templateUrl: './parkingspot.component.html',
  styleUrls: ['./parkingspot.component.scss']
})
export class ParkingspotComponent implements OnInit {
  parkingData: any ={};
  imgUrl:any = environment.url.imgUrl;
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };
  rejectReason: string;
  constructor(
    private api:WebapiserviceService, 
    @Inject(DOCUMENT) private document: Document, 
    private iconLibraries: NbIconLibraries, 
    private router: Router, 
    private _location: Location,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService
  ) { 
    this.document.body.classList.add('nb-theme-default');
    let url = this.router.url.split('/')[3]
    this.iconLibraries.registerSvgPack('housepark', {
      'profile': '<img src="assets/housedetailsicons/name_ic.svg">',
      'email': '<img src="assets/housedetailsicons/email_ic.svg">',
      'mobile': '<img src="assets/housedetailsicons/mobile_ic.svg">',
      'cake':  '<img src="assets/housedetailsicons/date_of_birth_ic.svg">',
      'address':  '<img src="assets/housedetailsicons/address_ic.svg">',
      'arrow':  '<img src="assets/housedetailsicons/back_ic.svg">',
      'bankName':  '<img src="assets/housedetailsicons/bank_name_ic.svg">',
      'AccountNumb':  '<img src="assets/housedetailsicons/account_number_ic.svg">',
      'AccountName':  '<img src="assets/housedetailsicons/account_holder_name_ic.svg">',
      'bankCode':  '<img src="assets/housedetailsicons/bank_code_ic.svg">',
      'parking-location': '<img src="assets/housedetailsicons/location_ic.svg">',
      'distension':'<img src="assets/housedetailsicons/distension_ic.svg">',
      'car-round': '<img src="assets/housedetailsicons/car_ic.svg">',
      'tick-blue': '<img src="assets/housedetailsicons/right_blue_ic.svg">',
      'tick-grey': '<img src="assets/housedetailsicons/right_gray_ic.svg">',
    });
    this.rejectReason = '';
    this.parkingDataFun(url);
  }

  ngOnInit() {
  }

  parkingDataFun(id) {
    this.api.post('/FindParkingSpotById',{"parkingSpotId": id}).subscribe((res:any)=>{
      this.parkingData = res.json().data || [];
      if(!res.json().data) {
        this._location.back();
      }
    })
  }

  openDocument(url) {
    window.open(this.imgUrl+url);
  }

  approvereject(id, status) {
    this.api.post('/mortgageverification',{"parkingSpotId": id, "mortgageVerification":status, "remark": this.rejectReason }).subscribe((res:any)=>{
      this.parkingData.mortgageVerification = res.json().data.mortgageVerification;
      this.rejectReason = '';
      this.showToast('top-right', 'success', 'Mortgage verification changed successfully');
    })
  }

  backPage() {
		this._location.back();
  } 

  openRejectModal(rejectdialog) {
    this.dialogService.open(rejectdialog, {
      context: {
        title: 'Delete',
      },
      hasBackdrop: false,
    }).onClose.subscribe(data => {
      this.parkingData.remark = this.rejectReason;
    });
  }


  showToast(position, status, message) {
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }
}
