import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ReportMoreInfoComponent } from '../report-more-info/report-more-info.component';
import { MatDialog } from '@angular/material/dialog';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  @Input() report: any;
  @Output() delete = new EventEmitter();

  constructor(
    private router: Router,
    private dialogRef: MatDialog,
    private rs: ReportService
  ) {}

  onDelete(evt: any, ind: number) {
    evt['ind'] = ind;
    this.delete.emit(evt);
  }

  openDialog(evt: any, ind: number) {
    const more_info_report = this.rs.getID(ind);

    this.dialogRef.open(ReportMoreInfoComponent, {
      data: more_info_report,
    });
  }
  ngOnInit(): void {}
}
