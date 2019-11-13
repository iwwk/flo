import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { HospicePatient } from '../../models/hospice-patient.model';
import * as moment from 'moment';
import { Moment } from 'moment';
import { PATIENT_STATUSES } from '../../models/patient-status.enum';

@Component({
  selector: 'mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['mobile.component.css'],
  animations: [
    trigger('slideToggle', [
      transition(':enter', [
        style({transform: 'translateY(-70%)'}),
        animate('300ms ease-in', style({transform: 'translateY(0%)', height: '100%'})),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateY(-70%)', height: '0%'})),
      ]),
    ]),
  ],
})
export class MobileTable {
  @Input() rowData: HospicePatient[];
  @Output() openChat: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();
  @Output() uploadInfo: EventEmitter<any> = new EventEmitter();

  constructor() { }
  getDateDiff(date) {
    var a = moment(date.startDate);
    var b = moment(date.endDate);
    return b.diff(a, 'days') + 1;
  }

  getTotal(element) {
    return element.serviceInfos.filter(info => !info.isDeleted).reduce((total, info) => total + this.getDateDiff(info) * (info.snfDailyRate || info.dailyRate || 0) - info.snfLiability || info.liability || 0, 0);
  }

  getStatusText(status) {
    return PATIENT_STATUSES.find(s => s.id == status).text;
  }
}
