import { PatientTag } from "./tag.model";
import { PatientStatuses } from "src/app/models/patient-status.enum";
import { SNFDate } from "./snf-date.model";
import { SNFHistory } from "./snf-history.model";

export interface HospicePatient {
  id: number,
  exteranalId: string,
  accountId: number,
  snfAccount: PatientSNFAccount,
  firstName: string,
  lastName: string,
  birthDate: Date,
  gender: number,
  status: PatientStatus,
  followUpDate: Date,
  hasUnreadNotes: boolean,
  tags: PatientTag[],
  street1: string,
  street2: string,
  city: string,
  state: string,
  zip: string,
  snfDates: SNFDate[],
  snfHistory: SNFHistory[],
  hospiceDates: any[],
  liability: number,
  dailyRate: number,
  daysInHospice: number,
  snfDaysInHospice: number,
  latestLiability: number,
  snfLiability: number,
  snfRate: number,
}

export interface PaginatedList<T> {
  totalCount: number,
  items: T[]
}


export interface PatientStatus {
  id: number,
  patientId: number,
  status: PatientStatuses,
  effectiveDate: Date
}

export interface PatientSNFAccount {
  id: number,
  patientId: number,
  accountId: number,
  effectiveDate: Date
}
