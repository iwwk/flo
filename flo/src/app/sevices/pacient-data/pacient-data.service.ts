import { Injectable } from '@angular/core';

@Injectable()
export class PatientDataService {
  public patientData = [];

  constructor() {
    this.patientData = [
      {
        pageIndex: 0,
        pageSize: 25,
        totalCount: 208,
        items: [
          {
            externalId: '552342',
            accountId: 10,
            firstName: 'MARIA',
            lastName: 'POPPINS',
            birthDate: '1933-05-05T00:00:00',
            gender: 2,
            followUpDate: '2019-08-20T00:00:00',
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 12,
            liability: 0.00,
            dailyRate: 241.54,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 0.00,
                dailyRate: 241.54,
                snfLiability: null,
                snfDailyRate: null,
                isDeleted: true,
                isAdded: false
              },
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 0.00,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 12.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 98
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                dailyRate: 599.00,
                liability: 0.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:40.1141509',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 216
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                dailyRate: 12.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:09:32.2659648',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 213
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 214
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 215
              }
            ],
            hospiceDate: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 29
          },
          {
            externalId: '2666771',
            accountId: 10,
            firstName: 'SANCHO',
            lastName: 'PANCHO',
            birthDate: '1945-02-22T00:00:00',
            gender: 2,
            followUpDate: null,
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 31,
            liability: 337.80,
            dailyRate: 0.0,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 337.80,
                dailyRate: 0.0,
                snfLiability: 337.80,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: false
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 99
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 465,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                dailyRate: 599.00,
                liability: 337.80,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:54.6366017',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 217
              }
            ],
            hospiceDates: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 465
          },
          {
            externalId: '552342',
            accountId: 10,
            firstName: 'MARIA',
            lastName: 'POPPINS',
            birthDate: '1933-05-05T00:00:00',
            gender: 2,
            followUpDate: '2019-08-20T00:00:00',
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 12,
            liability: 0.00,
            dailyRate: 241.54,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 0.00,
                dailyRate: 241.54,
                snfLiability: null,
                snfDailyRate: null,
                isDeleted: true,
                isAdded: false
              },
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 0.00,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 12.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 98
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                dailyRate: 599.00,
                liability: 0.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:40.1141509',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 216
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                dailyRate: 12.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:09:32.2659648',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 213
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 214
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 215
              }
            ],
            hospiceDate: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 29
          },
          {
            externalId: '2666771',
            accountId: 10,
            firstName: 'SANCHO',
            lastName: 'PANCHO',
            birthDate: '1945-02-22T00:00:00',
            gender: 2,
            followUpDate: null,
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 31,
            liability: 337.80,
            dailyRate: 0.0,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 337.80,
                dailyRate: 0.0,
                snfLiability: 337.80,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: false
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 99
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 465,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                dailyRate: 599.00,
                liability: 337.80,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:54.6366017',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 217
              }
            ],
            hospiceDates: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 465
          },
          {
            externalId: '552342',
            accountId: 10,
            firstName: 'MARIA',
            lastName: 'POPPINS',
            birthDate: '1933-05-05T00:00:00',
            gender: 2,
            followUpDate: '2019-08-20T00:00:00',
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 12,
            liability: 0.00,
            dailyRate: 241.54,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 0.00,
                dailyRate: 241.54,
                snfLiability: null,
                snfDailyRate: null,
                isDeleted: true,
                isAdded: false
              },
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 0.00,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 12.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 98
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                dailyRate: 599.00,
                liability: 0.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:40.1141509',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 216
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                dailyRate: 12.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:09:32.2659648',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 213
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 214
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 215
              }
            ],
            hospiceDate: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 29
          },
          {
            externalId: '2666771',
            accountId: 10,
            firstName: 'SANCHO',
            lastName: 'PANCHO',
            birthDate: '1945-02-22T00:00:00',
            gender: 2,
            followUpDate: null,
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 31,
            liability: 337.80,
            dailyRate: 0.0,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 337.80,
                dailyRate: 0.0,
                snfLiability: 337.80,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: false
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 99
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 465,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                dailyRate: 599.00,
                liability: 337.80,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:54.6366017',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 217
              }
            ],
            hospiceDates: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 465
          },
          {
            externalId: '552342',
            accountId: 10,
            firstName: 'MARIA',
            lastName: 'POPPINS',
            birthDate: '1933-05-05T00:00:00',
            gender: 2,
            followUpDate: '2019-08-20T00:00:00',
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 12,
            liability: 0.00,
            dailyRate: 241.54,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 0.00,
                dailyRate: 241.54,
                snfLiability: null,
                snfDailyRate: null,
                isDeleted: true,
                isAdded: false
              },
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 0.00,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 12.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 98
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                dailyRate: 599.00,
                liability: 0.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:40.1141509',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 216
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                dailyRate: 12.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:09:32.2659648',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 213
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 214
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 215
              }
            ],
            hospiceDate: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 29
          },
          {
            externalId: '2666771',
            accountId: 10,
            firstName: 'SANCHO',
            lastName: 'PANCHO',
            birthDate: '1945-02-22T00:00:00',
            gender: 2,
            followUpDate: null,
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 31,
            liability: 337.80,
            dailyRate: 0.0,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 337.80,
                dailyRate: 0.0,
                snfLiability: 337.80,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: false
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 99
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 465,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                dailyRate: 599.00,
                liability: 337.80,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:54.6366017',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 217
              }
            ],
            hospiceDates: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 465
          },
          {
            externalId: '552342',
            accountId: 10,
            firstName: 'MARIA',
            lastName: 'POPPINS',
            birthDate: '1933-05-05T00:00:00',
            gender: 2,
            followUpDate: '2019-08-20T00:00:00',
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 12,
            liability: 0.00,
            dailyRate: 241.54,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 0.00,
                dailyRate: 241.54,
                snfLiability: null,
                snfDailyRate: null,
                isDeleted: true,
                isAdded: false
              },
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 0.00,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 12.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              },
              {
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                liability: null,
                dailyRate: null,
                snfLiability: 1.00,
                snfDailyRate: 1.00,
                isDeleted: false,
                isAdded: true
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 98
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-03T00:00:00',
                dailyRate: 599.00,
                liability: 0.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:40.1141509',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 216
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-15T00:00:00',
                endDate: '2019-10-19T00:00:00',
                dailyRate: 12.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:09:32.2659648',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 213
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-20T00:00:00',
                endDate: '2019-10-21T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 214
              },
              {
                snfGroupId: 7462,
                patientId: 29,
                startDate: '2019-10-22T00:00:00',
                endDate: '2019-10-23T00:00:00',
                dailyRate: 1.00,
                liability: 1.00,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:21:04.2948832',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 215
              }
            ],
            hospiceDate: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 29
          },
          {
            externalId: '2666771',
            accountId: 10,
            firstName: 'SANCHO',
            lastName: 'PANCHO',
            birthDate: '1945-02-22T00:00:00',
            gender: 2,
            followUpDate: null,
            hasUnreadNotes: null,
            tags: [],
            street1: null,
            street2: null,
            city: null,
            state: null,
            zip: null,
            daysInHospice: 31,
            snfDaysInHospice: 31,
            liability: 337.80,
            dailyRate: 0.0,
            isPrivatePay: false,
            isMedPending: false,
            serviceInfos: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                liability: 337.80,
                dailyRate: 0.0,
                snfLiability: 337.80,
                snfDailyRate: 599.00,
                isDeleted: false,
                isAdded: false
              }
            ],
            status: {
              patientId: 0,
              status: 4,
              effectiveDate: '2019-10-01T00:00:00',
              updatedDateTime: null,
              updatedById: null,
              updatedByName: null,
              createdDateTime: '0001-01-01T00:00:00',
              createdById: null,
              createdByName: null,
              id: 99
            },
            snfAccount: null,
            snfHistory: [
              {
                snfGroupId: 7462,
                snfName: 'IL-Tower Hill Nursing Home NH',
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T23:59:00'
              }
            ],
            snfDates: [
              {
                snfGroupId: 7462,
                patientId: 465,
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                dailyRate: 599.00,
                liability: 337.80,
                note: null,
                exclude: false,
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '2019-11-01T12:24:54.6366017',
                createdById: 'db2a5077-1535-4bc9-8378-d9e9f5f58b0c',
                createdByName: 'admin admin',
                id: 217
              }
            ],
            hospiceDates: [
              {
                startDate: '2019-10-01T00:00:00',
                endDate: '2019-10-31T00:00:00',
                updatedDateTime: null,
                updatedById: null,
                updatedByName: null,
                createdDateTime: '0001-01-01T00:00:00',
                createdById: null,
                createdByName: null,
                id: 0
              }
            ],
            updatedDateTime: null,
            updatedById: null,
            updatedByName: null,
            createdDateTime: '0001-01-01T00:00:00',
            createdById: null,
            createdByName: null,
            id: 465
          }
        ]
      }
    ];
  }
}
