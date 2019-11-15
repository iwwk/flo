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
  public parentLineNumber: number;

  public agInit(tableData): void {
    this.tableData = tableData;
    this.parentLineNumber = this.tableData.rowIndex;
    this.rows = tableData.data.serviceInfos;
  }

  public ngOnInit(): void {}

  public uploadInfo(data): void {
    this.tableData.context.componentParent.upload(data);
  }

  public getDateDiff(date) {
    const a = moment(date.startDate);
    const b = moment(date.endDate);
    return b.diff(a, 'days') + 1;
  }

  public getTotal() {
    return this.tableData.data.serviceInfos.filter(info => !info.isDeleted).reduce((total, info) => total + this.getDateDiff(info) * (info.snfDailyRate || info.dailyRate || 0) - info.snfLiability || info.liability || 0, 0);
  }

  public everyone(num: number): boolean {
     if (this.parentLineNumber % num === 0) {
       return true;
     } else {return false; }
  }

  // public displayHeader(param: number) {
  //   if (param === 0) {
  //   } else {
  //     this.parentLineNumber === 0 || this.everyone(5);
  //   }
  // }
}
