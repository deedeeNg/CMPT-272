import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements OnInit {
  report: any[];
  query: string = '';

  constructor() {
    this.report = [
      {
        location: 'haha',
        name: 'deedee',
        time_reported: new Date().getTime(),
        status: true,
      },
      {
        location: 'haha',
        name: 'deedee',
        time_reported: new Date().getTime(),
        status: true,
      },
      {
        location: 'haha',
        name: 'deedee',
        time_reported: new Date().getTime(),
        status: true,
      },
      {
        location: 'haha',
        name: 'deedee',
        time_reported: new Date().getTime(),
        status: true,
      },
      {
        location: 'haha',
        name: 'deedee',
        time_reported: new Date().getTime(),
        status: true,
      },
    ];
  }

  add(report: any) {
    report.time_reported = new Date().getTime();
    this.report.push(report);
  }

  ngOnInit(): void {}
}
