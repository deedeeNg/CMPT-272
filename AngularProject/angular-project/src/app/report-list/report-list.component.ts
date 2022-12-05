import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements AfterViewInit {
  private map: any;
  report: any[] = [];
  query: string = '';

  constructor(private rs: ReportService, private http: HttpClient) {}

  onReportDelete(evt: any) {
    const del_report = evt['ind'];

    this.report = this.rs.delete(del_report);
  }

  ngAfterViewInit(): void {
    this.report = this.rs.get();
    this.map = L.map('mapid').setView([49.2, -123], 11);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Fpbmd1YzEyMyIsImEiOiJjbGJhNGNrbnkwNWJhM25wYjdkaWltNTB3In0.4qJT8JoBc34MUJ67IsuKbQ',
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(this.map);

    L.marker([49.2276, -123.0076])
      .addTo(this.map)
      .bindPopup('<b>Metrotown</b><br />cases reported.')
      .openPopup();

    L.marker([49.1867, -122.849])
      .addTo(this.map)
      .bindPopup('<b>SFU Surrey</b><br />cases reported.')
      .openPopup();
  }
}
