import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { WebapiserviceService } from '../../service/webapiservice.service';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';
import { NbToastrService } from '@nebular/theme';
import * as _ from 'lodash';

@Component({
  selector: 'ngx-carowner',
  templateUrl: './carowner.component.html',
  styleUrls: ['./carowner.component.scss']
})
export class CarownerComponent {
  imgUrl: any = environment.url.imgUrl;


  settings = {
    actions: {
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
      confirmSave: true,

    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    hideSubHeader: true,
    columns: {
      Id: {
        title: 'ID',
        class: 'dark-header',
        sort : true,
        sortDirection : 'desc',
        type: 'html',
        editable: false,
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font">' + cell + '</div>'
        }
      },
      first_name: {
        title: 'Name',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          let customImgUrl = '';
          if(row.profile_path == '') {
            customImgUrl = './assets/svg/profile_ic.svg';
          } else {
            customImgUrl = this.imgUrl + '' + row.profile_path;
          }
          return '<div class="dark-transaction-id" (click)="gotoDetails()"><img class="avatar" src="' + customImgUrl + '"><label class="name-magin" >' + row.first_name + ' ' + row.last_name + '<label></div>'
        }
      },
      email: {
        title: 'Email',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font">' + cell + '</div>'
        }
      },
      mobile: {
        title: 'Phone',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font">' + cell + '</div>'
        }
      },
      address: {
        title: 'Address',
        class: 'dark-header',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '<div class="table-column-font">' + cell + '</div>'
        }
      },
      isdeleted: {
        title: 'Status',
        class: 'dark-header',
        type: 'html',
        editable: false,
        valuePrepareFunction: (cell, row) => {
          if(cell=== '0') {
            return '<div class="active-status"> Active </div>';
          } else {
            return '<div class="delete-status"> Deleted </div>';
          }
        }
      },

    },

  };

  source: LocalDataSource = new LocalDataSource();
  responseData: any = [];
  copyresponseData: any = [];
  search: string;

  constructor(
    private route: Router, 
    private dialogService: NbDialogService, 
    private service: SmartTableData, 
    private api: WebapiserviceService,
    private toastrService: NbToastrService
  ) {

  }

  // ngOnDestroy(): void {
  //   throw new Error("Method not implemented.");
  // }

  ngOnInit() {
    this.api.get('/carownerlist').subscribe((res: any) => {
      this.responseData = res.json().data;
      this.copyresponseData = res.json().data;
      this.source.load(this.responseData);
    })
  }

  onDeleteConfirm(event): void {
    let Id = event.data.Id
    if(event.data.isdeleted === '0') {
      this.dialogService.open(DeleteDialogComponent, {
        context: {
          title: 'Delete ' + event.data.email + ' ',
        },
        hasBackdrop: false,
      }).onClose.subscribe(data => {
        if (data === true) {
          this.deleteuserApi(Id)
        };
      });
    } else {
      this.showToast('top-right', 'info', 'Already deleted');
    }
  }


  deleteuserApi(Id) {
    let index = this.responseData.findIndex(x => x.Id == Id);
    let Newdata = this.responseData.splice(index, 1);
    this.source.load(this.responseData);
    this.api.post('/deleteUser', { "Id": Id }).subscribe(res => {
      this.showToast('top-right', 'success', 'House Owner successfully deleted');
    })
  }

  onEditConfirm(event): void {
    let index = this.responseData.findIndex(x => x.Id == event.newData.Id);
    let Newdata = this.responseData.splice(index, 1, event.newData);
    this.source.load(this.responseData);
    this.api.post('/updateUser', event.newData).subscribe(res => {
      this.showToast('top-right', 'success', 'House Owner successfully updated');
    })
  }

  onCreateConfirm(event): void {
  }

  gotoDetails() {
  }

  onUserRowSelect(event) {
    let el = document.querySelector(".nb-checkmark")
    let parentId;
    if(el != null){
      parentId = el.parentNode.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute("ng-reflect-model");
    }
    if(event.data.isdeleted === '0' && !(parentId == event.data.Id)) {
      this.route.navigate(['car-details', event.data.Id]);
    }
  }

  searchBy() {
    
    let obj = {};
    this.responseData = JSON.parse(JSON.stringify(this.copyresponseData));
    this.search = this.search.trim().toLowerCase();
    if (this.search == "") {
      this.source.load(this.responseData);
      return
    }

    this.responseData = this.responseData.filter((val: any, key: any) => {
      val.first_name
      const getArray = Object.keys(val);
      for(const a of getArray) {
        if(val[a]) {
          let checkValue = '';
          if(a === 'first_name' ||  a === 'last_name') {
            let fullName: any = val['first_name']+' '+val['last_name'];
            checkValue = fullName.toLowerCase().includes(this.search);
          } else {
            checkValue = val[a].toString().toLowerCase().includes(this.search);
          }
          if(checkValue) {
            return true;
          }
        }
      }

      return false;
    });

    this.source.load(this.responseData);
  }

  showToast(position, status, message) {
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }
}
