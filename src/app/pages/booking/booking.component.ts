import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { WebapiserviceService } from '../../service/webapiservice.service';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {


    settings = {
      actions: {
        add: false,
        edit: false,
        delete: false,
        columnTitle: 'Actions',
        position: 'right',
        class: 'dark-header',
      },
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',

      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      hideSubHeader: true,
      columns: {
        id: {
          title: 'ID',
          sort : true,
          sortDirection : 'desc',
          class: 'dark-header',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            return '<div class="table-column-font">'+cell+'</div>'
          }

        },
        Transaction: {
          title: 'Transaction Id',
          class: 'dark-header',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            return '<div class="dark-transaction-id">'+cell+'</div>'
          }
        },
        From: {
          title: 'From',
          class: 'dark-header',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            const getDate = (cell !== 'Invalid date')?cell:'N/A';
            return '<div class="table-column-font">'+getDate+'</div>'
          }
        },
        To: {
          title: 'To',
          class: 'dark-header',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            const getDate = (cell !== 'Invalid date')?cell:'N/A';
            return '<div class="table-column-font">'+getDate+'</div>'
          }
        },
        House: {
          title: 'House Owner',
          class: 'dark-header',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            return '<div class="table-column-font">'+cell+'</div>'
          }
        },
        Address: {
          title: 'Address',
          class: 'dark-header',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            return '<div class="table-column-font">'+cell+'</div>'
          }
          
        },
        CarOwner: {
          title: 'Car Owner',
          class: 'dark-header',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            return '<div class="table-column-font">'+cell+'</div>'
          }
          
        },
        Amount: {
          title: 'Amount',
          class: 'dark-header',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            return '<div class="table-column-font ">'+cell+'</div>'
          }
          
        },
        status: {
          title: 'Status',
          class: 'dark-header',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            if(cell == '0') {
              return '<div class="set-complete"><span class="dot pending"><div class="status-margin table-column-font">Pending</div></span></div>'
            } else if(cell == '1') {
              return '<div class="set-complete"><span class="dot complete"><div class="status-margin table-column-font">Complete</div></span></div>'
            } else if(cell == '2') {
              return '<div class="set-complete"><span class="dot cancel"><div class="status-margin table-column-font">Cancel</div></span></div>'
            } else if(cell == '3') {
              return '<div class="set-complete"><span class="dot book"><div class="status-margin table-column-font">Pre-Book</div></span></div>'
            }
          }
        },
      },

    };

    source: LocalDataSource = new LocalDataSource();
    responseData: any;
    ngModelDate: any = {fromDate: '', toDate: '', search: ''};

    constructor(
        private api: WebapiserviceService,
        private route: Router,
      ) {
        this.getAllData();
    }

    // ngOnDestroy(): void {
    //   throw new Error("Method not implemented.");
    // }


    onDeleteConfirm(event): void {
      if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve();
      } else {
        event.confirm.reject();
      }
    }

    onUserRowSelect(event) {
      this.route.navigate(['booking-details',event.data.bookignId])
    }

    filterSourceData(getdata) {
      let getBookingList = [];
      getdata.forEach((val, key) => {
        const houseOwnerFirstName = val.houseownerfirstname || 'N/A';
        const houseOwnerLastName = val.houseownerlastname || '';

        const AddressLine = (val.addressline1 || 'N/A') +' '+ (val.addressline2 || '');
        getBookingList.push({ Address: AddressLine, Amount: val.amount, CarOwner: val.carwonerfirstname+' '+val.carownerlastname, From: moment(val.fromDate).utc().format('MMMM DD YYYY, hh:mm a'), House: houseOwnerFirstName+' '+houseOwnerLastName, To: moment(val.toDate).utc().format('MMMM DD YYYY, hh:mm a'), Transaction: val.bookingtransactionId, id: key + 1, status: val.booking_status, bookignId: val.booking_id });
      })
      this.source.load(getBookingList);
    }

    searchFilterData() {
        let searchName = this.ngModelDate.search.trim().toLowerCase();
        let getFilterData = this.responseData.filter( (val: any) => {
          const getObjectKey = Object.keys(val);
          for(const book of getObjectKey) {
            let checkBookingData: any = '';
            if(book === 'carwonerfirstname' || book === 'carownerlastname') {
              const getFullName = val['carwonerfirstname']+' '+val['carownerlastname'];
              checkBookingData = getFullName.toString().toLowerCase().includes(searchName);;
            } else if(book === 'houseownerfirstname' || book === 'houseownerlastname') {
              const getFullName = val['houseownerfirstname']+' '+val['houseownerlastname'];
              checkBookingData = getFullName.toString().toLowerCase().includes(searchName);;
            } else if(val[book]) {
              checkBookingData = val[book].toString().toLowerCase().includes(searchName);
            }

            if(checkBookingData) {
              return true;
            }
          }

          return false;
        });
      //   let getFilterData = this.responseData.filter(function (ele, i, array) {
      //     let getFullName = ele.carwonerfirstname.toLowerCase()+' '+ele.carownerlastname.toLowerCase();
      //     let checkFullName = getFullName.includes(searchName);
            
      //     let checkHouseOwner = false;
      //     if(typeof(ele.houseownerfirstname) == 'string' && typeof(ele.houseownerlastname) == 'string') {
      //       let getHouseOwner = ele.houseownerfirstname.toLowerCase()+' '+ele.houseownerlastname.toLowerCase();
      //       checkHouseOwner = getHouseOwner.includes(searchName);
      //     }

      //     let checkAddress = false;
      //     if(typeof(ele.addressline1) == 'string' && typeof(ele.addressline2) == 'string') {
      //       let getAddress = ele.addressline1.toLowerCase()+' '+ele.addressline2.toLowerCase();
      //       checkAddress = getAddress.includes(getAddress);
      //     }

      //     if(checkFullName) {
      //       return true;
      //     } else if(checkHouseOwner) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      // });

      this.filterSourceData(getFilterData);
    }

    filterData() {
      if(this.ngModelDate.fromDate != '' && this.ngModelDate.toDate != '') {
        let getFromDate = moment(this.ngModelDate.fromDate).format('YYYY-MM-DD hh:mm:ss');
        let getToDate = moment(this.ngModelDate.toDate).format('YYYY-MM-DD hh:mm:ss');
        
        this.api.get("/bookinglist?fromdate='"+getFromDate+"'&todate='"+getToDate+"'").subscribe((res: any)=>{
          let getres = res.json();
          this.responseData = getres.data;

          this.filterSourceData(this.responseData);
        });
      }
    }

    getAllData() {
      this.api.get('/bookinglist').subscribe((res: any)=>{
        let getres = res.json();
        this.responseData = getres.data;
        this.ngModelDate = {fromDate: '', toDate: '', search: ''};
        this.filterSourceData(this.responseData);
      });
    }

}
