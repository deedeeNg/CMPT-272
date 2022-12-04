import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  countID = 6;
  report = [
    {
      location: 'Coquitlam',
      name: 'Deedee',
      time_reported: new Date().getTime(),
      status: false,
      id: 1,
    },
    {
      location: 'Burnaby',
      name: 'Paul',
      time_reported: new Date().getTime(),
      status: false,
      id: 2,
    },
    {
      location: 'Kenshington',
      name: 'Kevin',
      time_reported: new Date().getTime(),
      status: false,
      id: 3,
    },
    {
      location: 'Vancouver',
      name: 'Mark',
      time_reported: new Date().getTime(),
      status: false,
      id: 4,
    },
    {
      location: 'East Van',
      name: 'Dustin',
      time_reported: new Date().getTime(),
      status: false,
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
