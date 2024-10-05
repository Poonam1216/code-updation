import { Component, OnInit } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { WebapiserviceService } from '../../../../service/webapiservice.service';
import { carownerProfile } from '../../car.model'
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'ngx-carownerprofile',
  templateUrl: './carownerprofile.component.html',
  styleUrls: ['./carownerprofile.component.scss']
})

export class CarownerprofileComponent implements OnInit {
	selectedItem = 'Past';
	imgUrl:any =environment.url.imgUrl;
	profileData : any =[{address: '', address_two: '', carColor: '', carModelName: '', dob: '', email: '', first_name: '', insuranceExpiry: '', insuranceNumber: '', last_name: '', licenseExpiry: '', licenseNumber: '', licensePlate: '', licenseSince: '', mobile: '', profile_path: '', vehicleMaker: '', year: ''}];

	booking: any = [];
	id: string;
	bookingdata: any =[];
	constructor(
		private iconLibraries: NbIconLibraries,
		private _location: Location,
		private router: Router, 
		private api:WebapiserviceService, 
	) { 
		
	

	}

	ngOnInit() {
		this.id = this.router.url.split('/')[2];
		this.api.post('/carownerdetails',{"carownerId":this.id}).subscribe((res:any={}) => {
			this.profileData = res.json().data;
			this.profileData[0].address = this.profileData[0].address.trim();
		});
		this.bookingpast();

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

	backPage() {
		this._location.back();
	}

	bookingpast() {
		this.api.post('/carownerpast',{"carownerId":this.id}).subscribe((res:any={}) => {
			this.bookingdata = res.json().data;
		});
	}

	bookingupcoming() {
		this.api.post('/carownerupcoming',{"carownerId":this.id}).subscribe((res:any={}) => {
			this.bookingdata = res.json().data;
		});
	}

	changeBooking(event) {
		if(event == "Upcoming") {
			this.bookingupcoming();
		} else {
			this.bookingpast();
		}
	}




}
