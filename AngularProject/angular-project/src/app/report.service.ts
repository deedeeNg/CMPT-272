import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  countID = 6;
  report = [
    {
      location: 'haha',
      name: 'deedee1',
      time_reported: new Date().getTime(),
      status: true,
      id: 1,
    },
    {
      location: 'haha',
      name: 'deedee2',
      time_reported: new Date().getTime(),
      status: true,
      id: 2,
    },
    {
      location: 'haha',
      name: 'deedee3',
      time_reported: new Date().getTime(),
      status: true,
      id: 3,
    },
    {
      location: 'haha',
      name: 'deedee4',
      time_reported: new Date().getTime(),
      status: true,
      id: 4,
    },
    {
      location: 'haha',
      name: 'deedee5',
      time_reported: new Date().getTime(),
      status: true,
      id: 5,
    },
  ];
  constructor() {}

  get() {
    return this.report;
  }

  getID(id: number) {
    const index = this.report.findIndex((r) => {
      return r.id === id;
    });

    return this.report[index];
  }

  add(r: any) {
    r.time_reported = new Date().getTime();
    r.id = this.countID++;
    this.report.push(r);
    console.log(this.report);
  }

  delete(del_report: number) {
    this.report = this.report.filter((r) => r.id !== del_report);
    return this.report;
  }
}
