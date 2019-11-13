import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'responsive-table',
  templateUrl: './responsive-table.component.html',
})
export class ResponsiveTableComponent  implements OnInit{
  public windowWidth: number;
  public desktopMaxWidth = 1024;
  public showMobile: boolean;
  constructor() {}

  public ngOnInit(): void {
    this.updateWindowWidth();
  }

  public updateWindowWidth(): void {
    this.windowWidth = window.innerWidth;
    this.windowWidth < this.desktopMaxWidth ? this.showMobile = true : this.showMobile = false
  }

  public openChat(rowDate): void {
    console.log('openChat', rowDate);
  }

  public edit(rowDate): void {
    console.log('edit', rowDate);
  }

  public onRowSelection(rowDate): void {
    console.log('onRowSelection', rowDate);
  }

  public onSelectionChanged(rowDate): void {
    console.log('onSelectionChanged', rowDate);
  }

  public uploadInfo(uploadData): void {
    console.log('uploadInfo', uploadData);
  }

  public selectedChange(selectedItem): void {
    console.log('selectedChange', selectedItem);
  }

}
