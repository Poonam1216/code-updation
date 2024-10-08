import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '0',
  }, {
    id: 2,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '1',
  }, {
    id: 3,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '3',
  }, {
    id: 4,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '0',
  }, {
    id: 5,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '1',
  }, {
    id: 6,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '2',
  }, {
    id: 7,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '2',
  }, {
    id: 8,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '3',
  }, {
    id: 9,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '0',
  }, {
    id: 10,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '1',
  }, {
    id: 11,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '2',
  }, {
    id: 12,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '0',
  }, {
    id: 13,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '3',
  }, {
    id: 14,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '1',
  }, {
    id: 15,
    Transaction: '2345XD778FSETFDEF',
    From: '02 Nov 2019, 08:00 AM',
    To: '02 Nov 2019, 11:00 AM',
    House: 'Mr Thomas Steves',
    Address: '260 Higginsillva Road Shubenacdie',
    CarOwner: 'Jermarien Love',
    Amount: '$234',
    status: '0',
  }];

  getData() {
    return this.data;
  }
}
