import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements OnInit {
  report: any[] = [];
  query: string = '';

  constructor(private rs: ReportService) {}

  onReportDelete(evt: any) {
    const del_report = evt['ind'];

    this.report = this.rs.delete(del_report);
  }

  ngOnInit(): void {
    this.report = this.rs.get();
  }
}
