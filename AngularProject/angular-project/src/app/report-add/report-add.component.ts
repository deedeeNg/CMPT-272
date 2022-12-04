import { Component, OnInit } from '@angular/core';
import { ReportListComponent } from '../report-list/report-list.component';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ReportService } from '../report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-add',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.css'],
})
export class ReportAddComponent implements OnInit {
  form: FormGroup;

  constructor(private rs: ReportService, private router: Router) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        this.forbiddenNamesValidator,
      ]),
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      status: new FormControl(false),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      breed: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      pid: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[0-9]*$'),
      ]),
      extra: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    };

    this.form = new FormGroup(formControls);
  }

  forbiddenNamesValidator(control: FormControl) {
    var bad_words = ['stupid', 'freaking', 'hell', 'idiot'];
    if (bad_words.includes(control.value.trim())) {
      return { name_error: 'Your name connect be ' + control.value }; // invalid
    } else {
      return null; // pass
    }
  }

  ngOnInit(): void {}

  onSubmit(values: any) {
    this.rs.add(values);
    this.router.navigate(['/']);
  }
}
