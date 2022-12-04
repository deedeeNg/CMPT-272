import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReportAddComponent } from '../report-add/report-add.component';
import { ReportListComponent } from '../report-list/report-list.component';

const appRoutes: Routes = [
  { path: '', component: ReportListComponent },
  { path: 'add', component: ReportAddComponent },
  //{ path: 'edit/:name', component: PersonEditFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
