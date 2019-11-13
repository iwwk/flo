import { IdTextPair } from "./EnumTextPair";

export enum PatientStatuses {
  NotStarted = 1,
  InReconliciliation = 2,
  AwaitingSNFResponse = 3,
  AwaitingHospiceResponse = 4,
  PendingPayment = 5,
  Paid = 6
}

export const PATIENT_STATUSES: IdTextPair[] = [
  { id: PatientStatuses.NotStarted, text: 'Not Started' },
  { id: PatientStatuses.InReconliciliation, text: 'In Reconliciliation' },
  { id: PatientStatuses.AwaitingSNFResponse, text: 'Awaiting SNF Response' },
  { id: PatientStatuses.AwaitingHospiceResponse, text: 'Awaiting Hospice Response' },
  { id: PatientStatuses.PendingPayment, text: 'Pending Payment' },
  { id: PatientStatuses.Paid, text: 'Paid' },
];
