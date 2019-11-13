import { Moment } from "moment";

export interface SNFHistory {
  snfGroupId: number,
  snfName: string,
  startDate: Moment,
  endDate: Moment,
}
