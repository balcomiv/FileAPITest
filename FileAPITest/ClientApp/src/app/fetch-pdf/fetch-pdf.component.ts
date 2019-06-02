import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fetch-pdf',
  templateUrl: './fetch-pdf.component.html',
  styleUrls: ['./fetch-pdf.component.css']
})
export class FetchPdfComponent {
  fileName = 'sample-3pp';
  pdfUrl: string;
  safePdfUrl;

  constructor(
    http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private domSanitizer: DomSanitizer
  ) {
    //http.get<WeatherForecast[]>(baseUrl + 'api/Files/sample-3pp').subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));

    this.pdfUrl = `${baseUrl}/api/Files/${this.fileName}`;
    this.safePdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
