import { PatientStatuses } from "./patient-status.enum";
import { AccountGroup } from "./account-group.model";
import { Moment } from 'moment';

export interface PatientFilter {
  hospiceGroup: AccountGroup,
  hospiceAccountIds: number[],
  snfAccountIds: number[],
  statuses: PatientStatuses[],
  state: string,
  followUpStartDate: string,
  followUpEndDate: string,
  followUpType: number,
  patientId: number,
  startDate: Moment,
  endDate: Moment,
  tag: number,
  hasUnreadNotes: boolean;
}
