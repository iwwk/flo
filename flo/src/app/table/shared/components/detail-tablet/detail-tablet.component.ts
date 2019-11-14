import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'detail-tablet',
  templateUrl: './detail-tablet.component.html',
  styleUrls: ['detail-tablet.component.css'],
})
export class DetailTablet implements OnInit {
  @Output() upload: EventEmitter<any> = new EventEmitter();

  public tableData: any;
  public rows: any;

  public agInit(tableData): void {
    this.tableData = tableData;
    this.rows = tableData.data.serviceInfos;
  }

  public ngOnInit(): void {}

  public uploadInfo(data): void {
    this.tableData.context.componentParent.upload(data);
  }

  getDateDiff(date) {
    const a = moment(date.startDate);
    const b = moment(date.endDate);
    return b.diff(a, 'days') + 1;
  }

  getTotal() {
    return this.tableData.data.serviceInfos.filter(info => !info.isDeleted).reduce((total, info) => total + this.getDateDiff(info) * (info.snfDailyRate || info.dailyRate || 0) - info.snfLiability || info.liability || 0, 0);
  }
}
