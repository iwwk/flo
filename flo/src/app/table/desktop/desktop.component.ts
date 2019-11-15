import { Component, EventEmitter, OnInit, Output, ViewEncapsulation, Input } from '@angular/core';
import { ColumnApi, GridApi, AllCommunityModules } from '@ag-grid-community/all-modules';
import { ActionsBtnComponent } from '../shared/components/actions-btn/actions-btn.component';
import { ChatActionsComponent } from '../shared/components/chat-actions/chat-actions.component';
import { DetailTablet } from '../shared/components/detail-tablet/detail-tablet.component';
import { StatusComponent } from '../shared/components/status/status.component';
import { HospicePatient } from '../../models/hospice-patient.model';
import { PatientNameComponent } from '../shared/components/patient-name/patient-name.component';

@Component({
  selector: 'desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['desktop.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DesktopTable implements OnInit {
  @Input() rowData: HospicePatient[];
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
  public countRow: number;

  constructor() {
    this.columnDefs = [
      {
        headerName: '',
        colId: 'checkbox',
        field: 'checkbox',
        maxWidth: 40,
        minWidth: 40,
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
        maxWidth: 40,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center',
        suppressSizeToFit: true,
      },
      {
        headerName: 'Status',
        colId: 'status',
        field: 'status',
        cellRendererFramework: StatusComponent,
        maxWidth: 105,
        minWidth: 80,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center',
      },
      {
        headerName: 'Patient',
        colId: 'patientName',
        field: 'model',
        cellRendererFramework: PatientNameComponent,
        maxWidth: 150,
        minWidth: 70,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center _wrap _underlined',
      },
      {
        headerName: 'Hospice',
        colId: 'hospice',
        field: 'snfHistory',
        valueGetter: params => params.data.snfHistory[0].snfName,
        minWidth: 70,
        maxWidth: 901,
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
        maxWidth: 1000,
      },
      {
        headerName: '',
        colId: 'actions',
        field: 'price',
        cellRendererFramework: ActionsBtnComponent,
        maxWidth: 90,
        suppressSizeToFit: true,
        minWidth: 45,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center',
      },
  ];
}

  public ngOnInit(): void {
  }

  public onGridReady(param: any): void {
    this.columnApi = param.columnApi;
    this.gridApi = param.api;
  }

  public updateTableSize(): void {
    this.columnApi.autoSizeColumns(['checkbox', 'chat', 'status', 'serviceInfo', 'actions']);
    this.gridApi.sizeColumnsToFit();
    this.gridApi.resetRowHeights();
  }

  public onFirstDataRendered(event: any): void {
    this.countRow = event.lastRow;
    this.columnApi = event.columnApi;
    this.gridApi = event.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.resetRowHeights();
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
