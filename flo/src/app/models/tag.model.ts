import { IdTextPair } from "./EnumTextPair";

export class PatientTag {
  id: number;
  type: number;
  patientId: number;
  effectiveDate: Date;

  public text():string 
  {
    return PATIENT_TAGS.find(tag => tag.id == this.type).text;
  }
}

export enum PatientTags {
  CensusDates = 1,
  MedPending = 2,
  LOC = 3,
  PTLiability = 4,
  DailyRates = 5
}

export const PATIENT_TAGS: IdTextPair[] = [
  { id: PatientTags.CensusDates, text: 'Census Dates' },
  { id: PatientTags.MedPending, text: 'Med Pending' },
  { id: PatientTags.LOC, text: 'LOC' },
  { id: PatientTags.PTLiability, text: 'PT Liability' },
  { id: PatientTags.DailyRates, text: 'Daily Rates' },
];

