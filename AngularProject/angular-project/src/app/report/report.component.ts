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
    let password = prompt('Please enter the password:');
    if (password === 'OINK!!') {
      evt['ind'] = ind;
      this.delete.emit(evt);
    } else {
      alert('Wrong password');
    }
  }

  openDialog(evt: any, ind: number) {
    const more_info_report = this.rs.getID(ind);

    this.dialogRef.open(ReportMoreInfoComponent, {
      data: more_info_report,
    });
  }

  retrive(evt: any, ind: number) {
    const data = this.rs.getID(ind);

    let password = prompt('Please enter the password:');
    if (password === 'OINK!!') {
      data.status = true;
    } else {
      alert('Wrong password');
    }
  }

  sortLocation() {
    this.rs.get().sort((a, b) => {
      return ('' + a.location).localeCompare(b.location);
    });
  }

  sortName() {
    this.rs.get().sort((a, b) => {
      return ('' + a.name).localeCompare(b.name);
    });
  }

  sortDate() {
    this.rs.get().sort((a, b) => {
      return b.time_reported - a.time_reported;
    });
  }

  ngOnInit(): void {}
}
