import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  countID = 5;
  report = [
    {
      location: 'haha',
      name: 'deedee',
      time_reported: new Date().getTime(),
      status: true,
      id: 1,
    },
    {
      location: 'haha',
      name: 'deedee',
      time_reported: new Date().getTime(),
      status: true,
      id: 2,
    },
    {
      location: 'haha',
      name: 'deedee',
      time_reported: new Date().getTime(),
      status: true,
      id: 3,
    },
    {
      location: 'haha',
      name: 'deedee',
      time_reported: new Date().getTime(),
      status: true,
      id: 4,
    },
    {
      location: 'haha',
      name: 'deedee',
      time_reported: new Date().getTime(),
      status: true,
      id: 5,
    },
  ];
  constructor() {}

  get() {
    return this.report;
  }

  add(r: any) {
    r.added_on = new Date().getTime();
    r.id = this.countID;
    this.countID++;
    this.report.push(r);
  }

  delete(del_report: number) {
    this.report = this.report.filter((r) => r.id !== del_report);
    return this.report;
  }
}
