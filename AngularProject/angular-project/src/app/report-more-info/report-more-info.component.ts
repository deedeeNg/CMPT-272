import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'app-report-more-info',
  templateUrl: './report-more-info.component.html',
  styleUrls: ['./report-more-info.component.css'],
})
export class ReportMoreInfoComponent implements OnInit {
  name: any;
  location: any;
  phone: any;
  breed: any;
  pid: any;
  extra: any;
  status: any;
  time_reported: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = data.name;
    this.location = data.location;
    this.phone = data.phone;
    this.breed = data.breed;
    this.pid = data.pid;
    this.extra = data.extra;
    this.status = data.status;
    this.time_reported = data.time_reported;
  }

  ngOnInit(): void {}
}
