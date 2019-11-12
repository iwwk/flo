import { Component } from '@angular/core';

@Component({
  selector: 'chat-action',
  templateUrl: './chat-actions.component.html',
})
export class ChatActionsComponent {
  public tableData: any;

  public agInit(tableData): void {
    this.tableData = tableData;
  }

  public openLeadChat(): void {
  }
}
