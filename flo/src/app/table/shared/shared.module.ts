import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { Components } from './components';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [
    Components,
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    FlexLayoutModule
  ],
  providers: [

  ],
  entryComponents: [
  ],
  exports: [
    StatusComponent
  ],
})

export class SharedModule { }
