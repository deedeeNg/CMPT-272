import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  locations: any[] = [];
  countID = -1;
  report: any[] = [];
  constructor(private http: HttpClient) {
    this.http
      .get<Object>(
        'https://272.selfip.net/apps/9WZC2YZZd1/collections/Report/documents/'
      )
      .subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          this.report.push(data[i].data);
          this.locations.push(data[i].location);
        }
      });
  }

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
    let num = -1;
    for (let i = 0; i < this.report.length; i++) {
      num = Math.max(num, this.report[i].id);
    }
    r.id = num + 1;
    this.http
      .post(
        'https://272.selfip.net/apps/9WZC2YZZd1/collections/Report/documents/',
        { key: `${r.id}`, data: r }
      )
      .subscribe((data: any) => {});

    window.location.reload();
  }

  delete(del_report: number) {
    this.report = this.report.filter((r) => r.id !== del_report);
    return this.report;
  }
}
