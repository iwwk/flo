import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HospicePatient } from '../../../models/hospice-patient.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  styleUrls: ['responsive-table.component.css'],
  selector: 'responsive-table',
  templateUrl: './responsive-table.component.html',
})
export class ResponsiveTableComponent implements OnInit {
  @Input() rowData: HospicePatient[];
  @Input() matTable: MatTableDataSource<HospicePatient>;

  @Output() openChat: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() uploadInfo: EventEmitter<any> = new EventEmitter();

  @Output() patientChecked: EventEmitter<any> = new EventEmitter();
  @Output() checkBoxPatientChange: EventEmitter<any> = new EventEmitter();

  public windowWidth: number;
  public desktopMaxWidth = 1024;
  public showMobile: boolean;
  constructor() {}

  public ngOnInit(): void {
    this.updateWindowWidth();
  }

  public updateWindowWidth(): void {
    this.windowWidth = window.innerWidth;
    this.windowWidth < this.desktopMaxWidth ? this.showMobile = true : this.showMobile = false;
  }
}
