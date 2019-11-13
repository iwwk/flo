import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'detail-tablet',
  templateUrl: './detail-tablet.component.html',
  styleUrls: ['detail-tablet.component.css'],
})
export class DetailTablet implements OnInit {
  @Output() upload: EventEmitter<any> = new EventEmitter();

  public tableData: any;
  public rows: any;

  public agInit(tableData): void {
    this.tableData = tableData;
    this.rows = tableData.data.detailsTable;
  }

  public ngOnInit(): void {}

  public uploadInfo(data): void {
    this.tableData.context.componentParent.upload(data);
  }
}
