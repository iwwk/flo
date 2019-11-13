import { Component } from '@angular/core';
import { PATIENT_STATUSES } from '../../../../models/patient-status.enum';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['status.component.css'],
})
export class StatusComponent {
  public tableData: any;

  public agInit(tableData): void {
    this.tableData = tableData;
  }

  getStatusText(status) {
    return PATIENT_STATUSES.find(s => s.id == status).text;
  }
}
