import { Moment } from "moment";

export interface SNFDate {
  id: number,
  startDate: Moment,
  endDate: Moment,
  exclude: true,
  note: string,
  snfDailyRate: number,
  dailyRate: number,
  snfLiability: number,
  liability: number
}
