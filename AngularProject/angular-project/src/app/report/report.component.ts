import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  @Input() report: any;
  @Output() delete = new EventEmitter();

  constructor(private router: Router) {}

  onDelete(evt: any, ind: number) {
    evt['ind'] = ind;
    this.delete.emit(evt);
  }

  ngOnInit(): void {}
}
