import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT, Location} from '@angular/common';
import { Router } from '@angular/router';
import { WebapiserviceService } from '../../../../service/webapiservice.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ngx-houseownerdetailview',
  templateUrl: './houseownerdetailview.component.html',
  styleUrls: ['./houseownerdetailview.component.scss']
})
export class HouseownerdetailviewComponent implements OnInit {
  parkingData: any = [];
  imgUrl: any = environment.url.imgUrl;
  bookingData: any = [];
  mortgageData: any = [];
  constructor(		private api: WebapiserviceService, @Inject(DOCUMENT) private document: Document, private router: Router) {
    this.document.body.classList.add('nb-theme-default');
    let url = this.router.url.split('/')[2]
    this.parkingSpot(url);
    this.bookingDetail(url);
    this.getMorgageDoc(url);
  }

  ngOnInit() {
  }


  
  goto(data) {
    this.router.navigate(['details', 'parking', data.Id])
  }

  parkingSpot(id) {
    this.api.post('/listUserWiseParking', { "Id": id }).subscribe((res: any) => {
      this.parkingData = res.json().data;
    })
  };

  bookingDetail(id) {
    this.api.post('/listBookingUserWiseParking', { "Id": id }).subscribe((res: any) => {
      this.bookingData = res.json().data;
    })
  };

  getMorgageDoc(id) {
    this.api.post('/mortgageDoc', { "Id": id }).subscribe((res: any) => {
      let mortgageData = res.json().data;

      for (let i = 0; i < mortgageData.length; i++) {
        const element = mortgageData[i];
        let filename = element.path.split("/")[3];
        mortgageData[i]['filename'] = filename;
        this.mortgageData.push(mortgageData[i]);
      }
      
      if(this.mortgageData.length != 0) {
        var blob = new Blob([this.mortgageData[0].path]);
        let fileR = new FileReader;
        let file  = fileR.readAsDataURL(blob);
      }
    })
  }

  openDocument(url) {
    window.open(environment.url.imgUrl+url);
  }

}
