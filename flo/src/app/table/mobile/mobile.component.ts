import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { patientDataService } from '../../sevices/pacient-data/pacient-data.service';

@Component({
  selector: 'mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['mobile.component.css'],
  animations: [
    trigger('slideToggle', [
      transition(':enter', [
        style({transform: 'translateY(-70%)'}),
        animate('300ms ease-in', style({transform: 'translateY(0%)', height: '100%'})),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateY(-70%)', height: '0%'})),
      ]),
    ]),
  ],
})
export class MobileTable implements OnInit {
  @Output() openChat: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();
  @Output() uploadInfo: EventEmitter<any> = new EventEmitter();

  public patientData: any;


  public ngOnInit(): void {
    this.patientData = this.patientDataService.patientData;
  }

  constructor(private readonly patientDataService: patientDataService) {}
}
