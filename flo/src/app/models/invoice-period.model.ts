import { Moment } from "moment";

export interface InvoicePeriod {
  id: number,
  hospiceId: number,
  startDate: Moment,
  endDate: Moment
}
