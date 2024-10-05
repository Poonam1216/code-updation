import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { WebapiserviceService } from '../../service/webapiservice.service';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dispute',
  templateUrl: './dispute.component.html',
  styleUrls: ['./dispute.component.scss']
})
export class DisputeComponent {


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
        class: 'dark-header',
        type: 'html',
        sort : true,
        sortDirection : 'desc',
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font">'+cell+'</div>'
        }
    
      },
      transaction: {
        title: 'Transaction Id',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<div class="dark-transaction-id" >'+cell+'</div>'
        }
      },
      created_by: {
        title: 'Opened By',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font">'+cell+'</div>'
        }
      },
      created_date: {
        title: 'Dispute Date',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font">'+cell+'</div>'
        }
      },
      owner: {
        title: 'Against',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font">'+cell+'</div>'
        }
      },
      reason: {
        title: 'Type / Reason',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font reason-break">'+cell+'</div>'
        }
      },
    
      amount: {
        title: 'Amount',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font ">'+cell+'</div>'
        }
        
      }, status: {
        title: 'Status       ',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          if(cell == '0') {
            return '<div class="full-status"><span class="dot pending"><div class="status-margin table-column-font">Pending</div></span></div>'
          } else if(cell == '1') {
            return '<div class="full-status"><span class="dot complete"><div class="status-margin table-column-font">Resolve</div></span></div>'
          } else if(cell == '2') {
            return '<div class="full-status"><span class="dot book"><div class="status-margin table-column-font">Closed</div></span></div>'
          }
        }
      },
    },

  };

  source: LocalDataSource = new LocalDataSource();
  responseData: any;
  ngModelDate: any = {fromDate: '', toDate: '', search: ''};

  constructor(
    private service: SmartTableData,
    private api: WebapiserviceService,
    private route: Router,
  ) {

    this.getAllData()
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

  filterSourceData(getdata) {
    let getBookingList = [];
    getdata.forEach((val, key) => {
      let openedByusertype = (val.openedByusertype == '0')?'House Owner':'Driver';
      let againtsusertype = (val.againtsusertype == '0')?'House Owner':'Driver';
      getBookingList.push({ id: val.Id, transaction: val.bookingtransactionId, created_by: val.openedbyFirstName+' '+val.openedbyLastName+' ('+openedByusertype+')', created_date: moment(val.createdAt).format('DD MMMM YYYY, h:mm A'), owner: val.againtsFirstName+' '+val.againtsLastName+' ('+againtsusertype+')', amount: val.amount, status: val.status, reason: val.comment, disputeId: val.Id });
    })
    this.source.load(getBookingList);
  }

  searchFilterData() {
    let searchName = this.ngModelDate.search.toLowerCase();

    let getFilterData = this.responseData.filter( (val: any) => {
      const getObjectKey = Object.keys(val);
      for(const dispute of getObjectKey) {
        let checkDisputdata: any = false;
        if(dispute === 'againtsFirstName' || dispute === 'againtsLastName' || dispute === 'againtsusertype') {
          // let openedByusertype = (val.openedByusertype == '0')?'House Owner':'Driver';
          let againtsusertype = (val.againtsusertype == '0')?'House Owner':'Driver';
          const getName = val['againtsFirstName']+' '+val['againtsLastName']+' ('+againtsusertype+')';
          checkDisputdata = getName.toString().toLowerCase().includes(searchName);
        } else if(dispute === 'openedbyFirstName' || dispute === 'openedbyLastName' || dispute === 'openedByusertype') {
          let openedByusertype = (val.openedByusertype == '0')?'House Owner':'Driver';
          const getName = val['openedbyFirstName']+' '+val['openedbyLastName']+' ('+openedByusertype+')';
          checkDisputdata = getName.toString().toLowerCase().includes(searchName);
        } else if(val[dispute]) {
          checkDisputdata = val[dispute].toString().toLowerCase().includes(searchName);
        }

        if(checkDisputdata) {
          return true;
        }
        
      }
    });

    this.filterSourceData(getFilterData);
  }

  onUserRowSelect(event) {
    this.route.navigate(['dispute-details',event.data.disputeId])
  }

  filterData() {
    if(this.ngModelDate.fromDate != '' && this.ngModelDate.toDate != '') {
      let getFromDate = moment(this.ngModelDate.fromDate).format('YYYY-MM-DD h:mm:ss');
      let getToDate = moment(this.ngModelDate.toDate).format('YYYY-MM-DD h:mm:ss');
      
      this.api.get("/disputelist?fromdate='"+getFromDate+"'&todate='"+getToDate+"'").subscribe((res: any)=>{
        let getres = res.json();
        this.responseData = getres.data;

        this.filterSourceData(this.responseData);
      });
    }
  }

  getAllData() {
    this.api.get('/disputelist').subscribe((res: any)=>{
      let getres = res.json();
      this.responseData = getres.data;
      this.ngModelDate = {fromDate: '', toDate: '', search: ''};
      this.filterSourceData(this.responseData);
    });
  }

}
