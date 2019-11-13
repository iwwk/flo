import { Component } from '@angular/core';

@Component({
  selector: 'name',
  templateUrl: './patient-name.component.html',
  styleUrls: ['patient-name.component.css'],
})
export class PatientNameComponent {
  public tableData: any;

  public agInit(tableData): void {
    this.tableData = tableData;
  }
}
