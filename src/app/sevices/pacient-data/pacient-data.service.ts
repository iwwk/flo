import { Injectable } from '@angular/core';

@Injectable()
export class patientDataService {
  public patientData = [];
  constructor() {
    this.patientData = [
      {
        show: false,
        started: 'Not started',
        name: 'ALANIS MARIA',
        hospice: 'il-Tower Hill Nursing home NH',
        total: 9999.12,
        detailsTable: [
          {
            status: 'active',
            warningType: false,
            startDate: '11/11/19',
            endDate: '12/11/19',
            dateOfService: 23,
            dailyRate: {
              from: '241,59',
              to: '241,59',
            },
            grossPayment: 7448.12,
            liability: {
              from: 121.59,
              to: 999.59,
            },
            netPayment: 7448.12,
          },
          {
            status: 'un active',
            warningType: true,
            startDate: '10/11/19',
            endDate: '12/11/19',
            dateOfService: 23,
            dailyRate: {
              from: '241,59',
              to: '241,59',
            },
            grossPayment: 7448.12,
            liability: {
              from: 121.59,
              to: 999.59,
            },
            netPayment: 7448.12,
            total: 9999.12,
          },
          {
            status: 'active',
            warningType: false,
            startDate: '10/11/19',
            endDate: '12/11/19',
            dateOfService: 23,
            dailyRate: {
              from: '241,59',
              to: '241,59',
            },
            grossPayment: 7448.12,
            liability: {
              from: 121.59,
              to: 999.59,
            },
            netPayment: 7448.12,
            total: 99999.12,
          },
        ]
      },
      {
        show: false,
        started: 'Not started',
        name: 'Scarlett Ingrid Johansson',
        hospice: 'il-Tower Hill Nursing home NH',
        total: 9999.12,
        detailsTable: [
          {
            status: 'active',
            warningType: false,
            startDate: 'item21',
            endDate: '12/11/19',
            dateOfService: 23,
            dailyRate: {
              from: '241,59',
              to: '241,59',
            },
            grossPayment: 7448.12,
            liability: {
              from: 121.59,
              to: 999.59,
            },
            netPayment: 7448.12,
          },
        ],
      },
    ];
  }
}
