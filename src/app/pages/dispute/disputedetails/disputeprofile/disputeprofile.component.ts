import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NbIconLibraries, NbToastrService } from '@nebular/theme';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpEvent } from '@angular/common/http';
import { WebapiserviceService } from '../../../../service/webapiservice.service';
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from 'moment/moment'


@Component({
  selector: 'ngx-disputeprofile',
  templateUrl: './disputeprofile.component.html',
  styleUrls: ['./disputeprofile.component.scss']
})
export class DisputeprofileComponent implements OnInit {
	accept = '*';
	files: File[] = [];
	progress: number;
	hasBaseDropZoneOver: boolean = false;
	httpEmitter: Subscription;
	httpEvent: HttpEvent < {} > ;
	lastFileAt: Date;
	sendableFormData: FormData;
	dragFiles: any;
	validComboDrag: any;
	lastInvalids: any;
	fileDropDisabled: any;
	maxSize: any;
	baseDropValid: any;
	disputeDetailsResponse: any;
	openedByusertype: string = '';
	againtsusertype: string = '';
	reasonForm: any = {title: '', comment: ''};
	checkRequiredSubmit: boolean = false;
	getDisputeId: string;
	@ViewChild('mainEl', { read: ElementRef }) mainEl: ElementRef
	
  	constructor(
		private iconLibraries: NbIconLibraries,
		private _location: Location,
		private api: WebapiserviceService,
		private router: Router,
		private toastrService: NbToastrService,
		private spinner: NgxSpinnerService
  	) { 
		this.getDisputeId = this.router.url.split('/')[2];
		this.getDisputeDetails(this.getDisputeId);
	}

	onMouseWheel(evt) {
		this.mainEl.nativeElement.click();
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


		this.disputeDetailsResponse = [];
	}

	getDate() {
		return new Date();
	}

	backPage() {
		this._location.back();
	}

	getDisputeDetails(id) {
		this.spinner.show();
		this.api.post('/disputelistBy', {Id: id}).subscribe((res: any) => {
			let getres = res.json();
			if(getres.status) {
				if(getres.data.length) {
					this.disputeDetailsResponse = getres.data[0];
					this.openedByusertype = (this.disputeDetailsResponse.openedByusertype == '0')?'House Owner':'Driver';
					this.againtsusertype = (this.disputeDetailsResponse.againtsusertype == '0')?'House Owner':'Driver';
					this.spinner.hide();
				} else {
					this.router.navigate(['/pages/dispute']);
				}
			} else {
				this.router.navigate(['/pages/dispute']);
			}
		});
	}

	setDateFormat(date) {
		return moment(date).format('DD MMMM, YYYY, h:mm A');
	}

	submitReasonForm() {
		if(this.reasonForm.title.trim() != '' && this.reasonForm.comment.trim() != '') {
			const formData = new FormData();
			this.files.forEach( (val, key) => {
				formData.append('images', this.files[key]);
			});
			formData.append('title', this.reasonForm.title);
			formData.append('comment', this.reasonForm.comment);
			formData.append('helpid', this.getDisputeId);
			formData.append('bookingId', this.disputeDetailsResponse.bookingId);
			formData.append('status', this.disputeDetailsResponse.status);
			this.spinner.show();
			this.api.fordataPost('/addDispute', formData).subscribe( (res) => {
				let getres = res.json();
				this.showToast('top-right', 'info', 'Dispute reason successfully added');
				this.reasonForm = {title: '', comment: ''};
				this.files = [];
				this.spinner.hide();
				// setTimeout(() => {
				// 	this.router.navigate(['/pages/dispute']);
				// }, 1000)
			});
		} else {
			this.checkRequiredSubmit = true;
		}
	}

	showToast(position, status, message) {
		this.toastrService.show(status || 'Success', message, { position, status });
	}
}
