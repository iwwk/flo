import { Component, EventEmitter, OnInit, Output, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ColumnApi, GridApi, AllCommunityModules } from '@ag-grid-community/all-modules';
import { ActionsBtnComponent } from '../shared/components/actions-btn/actions-btn.component';
import { ChatActionsComponent } from '../shared/components/chat-actions/chat-actions.component';
import { DetailTablet } from '../shared/components/detail-tablet/detail-tablet.component';
import { StatusComponent } from '../shared/components/status/status.component';
import { HospicePatient } from '../../models/hospice-patient.model';
import { PatientNameComponent } from '../shared/components/patient-name/patient-name.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['desktop.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DesktopTable implements OnChanges {
  @Input() rowData: HospicePatient[];
  @Input() matTable: MatTableDataSource<HospicePatient>;
  @Output() openChat: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() uploadInfo: EventEmitter<any> = new EventEmitter();
  @Output() patientChecked: EventEmitter<any> = new EventEmitter();
  @Output() checkBoxValueChange: EventEmitter<any> = new EventEmitter();

  public modules = AllCommunityModules;
  public columnApi: ColumnApi;
  public gridApi: GridApi;
  private rowHeight;
  private columnDefs;
  public deltaRowDataMode: boolean = true;

  constructor() {
    this.columnDefs = [
      {
        headerName: '',
        colId: 'checkbox',
        field: 'checkbox',
        width: 40,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _custom-checkbox',
        suppressSizeToFit: true,
      },
      {
        headerName: '',
        colId: 'chat',
        cellRendererFramework: ChatActionsComponent,
        width: 55,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center',
        suppressSizeToFit: true,
      },
      {
        headerName: 'Status',
        colId: 'status',
        field: 'status',
        cellRendererFramework: StatusComponent,
        width: 135,
        suppressSizeToFit: true,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center',
      },
      {
        headerName: 'Patient',
        colId: 'patientName',
        field: 'model',
        cellRendererFramework: PatientNameComponent,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center _wrap _underlined',
      },
      {
        headerName: 'Hospice',
        colId: 'hospice',
        field: 'snfHistory',
        valueGetter: params => params.data.snfHistory[0].snfName,
        autoHeight: true,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center _wrap',
      },
      {
        headerName: 'Service Info',
        colId: 'serviceInfo',
        field: 'model',
        headerClass: 't-default__header',
        cellClass: 't-default__cell',
        cellRendererFramework: DetailTablet,
        autoHeight: true,
      },
      {
        headerName: '',
        colId: 'actions',
        field: 'price',
        cellRendererFramework: ActionsBtnComponent,
        suppressSizeToFit: true,
        width: 45,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center',
      },
  ];
}


  ngOnChanges(changes: SimpleChanges): void {
    if (this.gridApi) {
      this.gridApi.setRowData(this.rowData);
      this.gridApi.redrawRows();
      this.gridApi.resetRowHeights();
    }
  }

  public onGridReady(param: any): void {
    this.columnApi = param.columnApi;
    this.gridApi = param.api;
  }

  public updateTableSize(): void {
    this.columnApi.autoSizeColumns(['patientName', 'hospice', 'serviceInfo']);
    this.gridApi.sizeColumnsToFit();
    this.gridApi.resetRowHeights();
  }

  public getRowNodeId(data: HospicePatient) {
    return data.id;
  }

  public openDetailsModal(dataRow: any): void {
    this.openChat.emit(dataRow);
  }

  public editInfo(dataRow: any): void {
    this.edit.emit(dataRow);
  }

  public upload(dataRow: any): void {
    this.uploadInfo.emit(dataRow);
  }
}
