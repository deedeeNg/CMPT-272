import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ReportMoreInfoComponent } from '../report-more-info/report-more-info.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  @Input() report: any;
  @Output() delete = new EventEmitter();

  constructor(private router: Router, private dialogRef: MatDialog) {}

  onDelete(evt: any, ind: number) {
    evt['ind'] = ind;
    this.delete.emit(evt);
  }

  openDialog() {
    this.dialogRef.open(ReportMoreInfoComponent);
  }
  ngOnInit(): void {}
}
