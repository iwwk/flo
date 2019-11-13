import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { patientDataService } from '../../sevices/pacient-data/pacient-data.service';
import { ColumnApi, GridApi } from 'ag-grid-community';
import { ActionsBtnComponent } from '../shared/components/actions-btn/actions-btn.component';
import { ChatActionsComponent } from '../shared/components/chat-actions/chat-actions.component';
import { DetailTablet } from '../shared/components/detail-tablet/detail-tablet.component';
import { StatusComponent } from '../shared/components/status/status.component';

@Component({
  selector: 'desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['desktop.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DesktopTable implements OnInit {
  @Output() openChat: EventEmitter<any> = new EventEmitter();
  @Output() uploadInfo: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() rowSelection: EventEmitter<any> = new EventEmitter();
  @Output() selectionChanged: EventEmitter<any> = new EventEmitter();

  public columnApi: ColumnApi;
  public gridApi: GridApi;
  private rowHeight;
  private columnDefs;
  public rowData;

  constructor(private readonly patientDataService: patientDataService) {
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
        headerName: 'chat',
        colId: 'chat',
        cellRendererFramework: ChatActionsComponent,
        maxWidth: 40,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center',
        suppressSizeToFit: true,
      },
      {
        headerName: 'started',
        colId: 'started',
        field: 'model',
        cellRendererFramework: StatusComponent,
        maxWidth: 105,
        minWidth: 100,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center',
        suppressSizeToFit: true,
      },
      {
        headerName: 'name',
        colId: 'name',
        field: 'name',
        maxWidth: 150,
        minWidth: 70,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center _wrap _underlined',
      },
      {
        headerName: 'hospice',
        colId: 'hospice',
        field: 'hospice',
        minWidth: 70,
        maxWidth: 901,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center _wrap',
      },
      {
        headerName: 'service info',
        colId: 'secondTable',
        field: 'model',
        headerClass: 't-default__header',
        cellClass: 't-default__cell',
        cellRendererFramework: DetailTablet,
        autoHeight: true,
        maxWidth: 1000,
      },
      {
        headerName: 'action',
        colId: 'actions',
        field: 'price',
        cellRendererFramework: ActionsBtnComponent,
        maxWidth: 90,
        suppressSizeToFit: true,
        minWidth:80,
        headerClass: 't-default__header',
        cellClass: 't-default__cell _align-center',
      },
  ];
}

  public ngOnInit(): void {
    this.rowData = this.patientDataService.patientData;
  }

  public onGridReady(param: any): void {
    this.columnApi = param.columnApi;
    this.gridApi = param.api;
  }

  public updateTableSize(): void {
    this.columnApi.autoSizeColumns(['checkbox', 'chat', 'started', 'secondTable', 'actions']);
    this.gridApi.sizeColumnsToFit();
    this.gridApi.resetRowHeights();
  }

  public onFirstDataRendered(event: any): void {
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
