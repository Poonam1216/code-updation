import { Component } from '@angular/core';
import { WebapiserviceService } from '../../service/webapiservice.service';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})


export class ECommerceComponent {
  responseData:any={};
  statusCards: any = [{
    title: 'Total House Owner',
    iconClass: 'total_house_owner',
    type: 'houseowner',
    value: '0'
  }, {
    title: 'Total Driver',
    iconClass: 'total_driver',
    type: 'driver',
    value: '0'
  }, {
    title: 'Total Value Of Booking',
    iconClass: 'total_value_of_booking',
    type: 'booking',
    value: '$0'
  }];

  
  constructor(private api: WebapiserviceService) {
    this.getcountofbashboard();
  }

  getcountofbashboard() {
    this.api.get('/dashboardcount').subscribe(res => {
        let getres = res.json();
        this.responseData = getres;
      for (let i = 0; i <  this.responseData.data.length; i++) {
          if( this.responseData.data[i].houseOwner) {
            this.statusCards[0].value = this.responseData.data[i].houseOwner;
          }
          if( this.responseData.data[i].carOwner) {
            this.statusCards[1].value = this.responseData.data[i].carOwner;
          }
          if( this.responseData.data[i].totalBookingAmount) {
            this.statusCards[2].value = '$'+this.responseData.data[i].totalBookingAmount;
          }
      }
    })
  }
}
