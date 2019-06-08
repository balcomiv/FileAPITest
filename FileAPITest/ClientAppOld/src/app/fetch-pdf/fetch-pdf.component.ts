import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { WeatherForecast } from '../fetch-data/fetch-data.component';

@Component({
  selector: 'app-fetch-pdf',
  templateUrl: './fetch-pdf.component.html',
  styleUrls: ['./fetch-pdf.component.css']
})
export class FetchPdfComponent implements OnInit {
  public forecasts: WeatherForecast[];
  fileName = 'sample-3pp';
  pdfUrl: string;
  safePdfUrl;
  objectUrl;

  private _baseUrl;

  constructor(
    @Inject('BASE_URL') baseUrl: string,
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) {
    //http.get<WeatherForecast[]>(baseUrl + 'api/Files/sample-3pp').subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));

    this._baseUrl = baseUrl;
    this.pdfUrl = `${this._baseUrl}/api/Files/${this.fileName}`;
  }

  ngOnInit() {
    this.getSafeUrlFromBlob();
  }

  private getSafeUrlFromPdfUrl() {
    this.safePdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

  private getSafeUrlFromBlob() {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application-pdf');

    this.http.get(this.pdfUrl, { headers, responseType: 'blob' })
    .subscribe(
      (result) => {
        console.log("Blob", result);
        this.objectUrl = window.URL.createObjectURL(result);
        this.safePdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.objectUrl);
    },
    error => {
      console.log("Error:", error);
      // alert(`Error: ${error}`);
    });
  }

  private getData() {
    this.http.get<WeatherForecast[]>(this._baseUrl + 'api/SampleData/WeatherForecasts')
    .subscribe(
      result => {
        this.forecasts = result;
      }, 
      error => console.error(error)
    );
  }
}