import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'actions-btn',
  templateUrl: './actions-btn.component.html',
  styleUrls: ['actions-btn.component.css'],
})
export class ActionsBtnComponent {
  public tableData: any;

  public agInit(tableData): void {
    this.tableData = tableData;
  }

  public edit(data): void {
    this.tableData.context.componentParent.editInfo(data);
  }
}
