import { Component, OnInit } from '@angular/core';
import { PatientDataService } from './sevices/pacient-data/pacient-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title = 'response-table';
  public rowData: any[];

  constructor( public readonly patientDataService: PatientDataService) {}

  public ngOnInit(): void {
    this.rowData = this.patientDataService.patientData[0].items;
  }
}
