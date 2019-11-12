import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './index';
import { AgGridModule } from 'ag-grid-angular';
import { ActionsBtnComponent } from './shared/components/actions-btn/actions-btn.component';
import { ChatActionsComponent } from './shared/components/chat-actions/chat-actions.component';
import { DetailTablet } from './shared/components/detail-tablet/detail-tablet.component';
import { StatusComponent } from './shared/components/status/status.component';
import { SharedModule } from './shared/shared.module';
import { ResponsiveTableComponent } from './view/responsive-table/responsive-table.component';

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    SharedModule,
    AgGridModule.withComponents([
      ChatActionsComponent,
      StatusComponent,
      ActionsBtnComponent,
      DetailTablet,
    ]),
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  exports: [
    ResponsiveTableComponent,
  ]
})

export class TableModule { }
