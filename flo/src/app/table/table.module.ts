import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActionsBtnComponent } from './shared/components/actions-btn/actions-btn.component';
import { ChatActionsComponent } from './shared/components/chat-actions/chat-actions.component';
import { DetailTablet } from './shared/components/detail-tablet/detail-tablet.component';
import { StatusComponent } from './shared/components/status/status.component';
import { ResponsiveTableComponent } from './view/responsive-table/responsive-table.component';
import { MaterialModule } from '../material.module';
import { DesktopTable } from './desktop/desktop.component';
import { MobileTable } from './mobile/mobile.component';
import { PatientNameComponent } from './shared/components/patient-name/patient-name.component';

@NgModule({
  declarations: [
    DesktopTable,
    MobileTable,
    ResponsiveTableComponent,
    ActionsBtnComponent,
    ChatActionsComponent,
    DetailTablet,
    PatientNameComponent,
    StatusComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    AgGridModule.withComponents([
      ChatActionsComponent,
      StatusComponent,
      ActionsBtnComponent,
      PatientNameComponent,
      DetailTablet,
    ]),
    // check your import!!!FlexLayoutModule for mobile version
    FlexLayoutModule,
  ],
  exports: [
    ResponsiveTableComponent,
  ]
})

export class TableModule { }
