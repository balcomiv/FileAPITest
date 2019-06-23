import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { getSafeUrl, createObjectUrl } from 'src/app/shared/utilities/file-utilities';
import { catchError, finalize } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
// import { WeatherForecast } from '../fetch-data/fetch-data.component';

@Component({
  selector: 'app-fetch-pdf',
  templateUrl: './fetch-pdf.component.html',
  styleUrls: ['./fetch-pdf.component.css']
})
export class FetchPdfComponent implements OnInit {
  fileName = 'sample-3pp.pdf';
  pdfUrl: string;
  safePdfUrl;
  safePdfObjectUrl;
  objectUrl;
  docFound: boolean = false;

  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) {
    this.pdfUrl = `/api/files`;
  }

  ngOnInit() {
    this.safePdfUrl = getSafeUrl(this.pdfUrl, this.domSanitizer);
    this.getSafeUrlFromBlob();
  }

  private getSafeUrlFromBlob() {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application-pdf');

    const params = new HttpParams();

    params.append('fileName', 'sample-3pp.pdf');
    params.append('contentType', 'application/pdf');
    params.append('inline', 'true');


    this.http.get(this.pdfUrl, { headers, params, responseType: 'blob' })
    .pipe(
      catchError((err) => {
        // simple logging, but you can do a lot more, see below
        const msg = `An error occured: ${err.error}`;
        // alert(msg);
        // console.warn('An error occurred:', err.error);
        return EMPTY;
      }),
      finalize(() => console.log("objectUrl: ", this.objectUrl))
    )
    .subscribe(
      (result) => {
        console.log("Blob", result);
        this.objectUrl = createObjectUrl(result);
        this.safePdfObjectUrl = getSafeUrl(this.objectUrl, this.domSanitizer);
        this.docFound = true;
    },
    error => {
      console.log("Blob Error:", error);
      // alert(`Error: ${error}`);
    });
  }
}
