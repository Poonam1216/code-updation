import { Component, OnInit } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SwiperOptions } from 'swiper';
import { StarRatingComponent } from 'ng-starrating';
import { WebapiserviceService } from '../../../../service/webapiservice.service';
import * as moment from 'moment/moment';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ngx-bookingdetailsprofile',
  templateUrl: './bookingdetailsprofile.component.html',
  styleUrls: ['./bookingdetailsprofile.component.scss']
})
export class BookingdetailsprofileComponent implements OnInit {
	config: SwiperOptions = {
				pagination: { el: '.swiper-pagination', clickable: true },
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				spaceBetween: 30,
			};
	bookingDetailsResponse: any = [];
	imgUrl:any = environment.url.imgUrl;

	constructor(
		private iconLibraries: NbIconLibraries,
		private _location: Location,
		private api: WebapiserviceService,
		private router: Router
	) { 
		let getId = this.router.url.split('/')[2];
		this.getBookingDetails(getId);
	}

  	ngOnInit() {
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
	}

	onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
		// alert(`Old Value:${$event.oldValue}, 
		// New Value: ${$event.newValue}, 
		// Checked Color: ${$event.starRating.checkedcolor}, 
		// Unchecked Color: ${$event.starRating.uncheckedcolor}`);
	}

	backPage() {
		this._location.back();
	}

	getBookingDetails(id) {
		this.api.post('/bookingDetails', {bookingId: id}).subscribe((res: any) => {
			let getres = res.json();
			this.bookingDetailsResponse = getres.data[0];
		});
	}

	setDateFormat(date) {
		return moment(date).utc().format('DD MMMM, YYYY, h:mm a');
	}

	openCarDetails(getdata) {
		this.router.navigate(['car-details', getdata.car_user_id])
	}

	openHouseOwnerDetails(getdata) {
		this.router.navigate(['details', getdata.houseownerId])
	}

}
