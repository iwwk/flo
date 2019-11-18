import { Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { HospicePatient } from '../../models/hospice-patient.model';
import * as moment from 'moment';
import { PATIENT_STATUSES } from '../../models/patient-status.enum';

@Component({
  selector: 'mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['mobile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileTable {
  @Input() rowData: HospicePatient[];
  @Output() openChat: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() uploadInfo: EventEmitter<any> = new EventEmitter();
  @Output() checkBoxValueChange: EventEmitter<any> = new EventEmitter();
  @Output() patientChecked: EventEmitter<any> = new EventEmitter();

  constructor() { }
  getDateDiff(date) {
    const a = moment(date.startDate);
    const b = moment(date.endDate);
    return b.diff(a, 'days') + 1;
  }

  public getTotal(element) {
    return element.serviceInfos.filter(info => !info.isDeleted).reduce((total, info) => total + this.getDateDiff(info) * (info.snfDailyRate || info.dailyRate || 0) - info.snfLiability || info.liability || 0, 0);
  }

  public getStatusText(status) {
    return PATIENT_STATUSES.find(s => s.id === status).text;
  }

  public checkStatusCheckBox(event, data) {
    if (event.checked) {
     this.patientChecked.emit(data);
     this.checkBoxValueChange.emit(data);
    } else {
      this.checkBoxValueChange.emit(data);
    }
  }
}
