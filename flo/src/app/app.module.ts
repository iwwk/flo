import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { patientDataService } from './sevices/pacient-data/pacient-data.service';
import { TableModule } from './table/table.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
    patientDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
