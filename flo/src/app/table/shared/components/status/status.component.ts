import { Component } from '@angular/core';

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
}
