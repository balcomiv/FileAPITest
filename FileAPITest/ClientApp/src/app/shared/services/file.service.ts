import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StringifyOptions } from 'querystring';
import { getSafeUrl, createObjectUrl } from '../utilities/file-utilities';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private objectUrl: string;
  private safeObjectUrl: SafeResourceUrl;

  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) { }

  getSafeUrlFromBlob(url: string) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application-pdf');

    const params = new HttpParams();

    params.append('fileName', 'sample-3pp.pdf');
    params.append('contentType', 'application/pdf');
    params.append('inline', 'true');


    this.http.get(url, { headers, params, responseType: 'blob' })
    .subscribe(
      (result) => {
        console.log("Blob", result);
        this.objectUrl = createObjectUrl(result);
        this.safeObjectUrl = getSafeUrl(this.objectUrl, this.domSanitizer);
    },
    error => {
      console.log("Blob Error:", error);
      // alert(`Error: ${error}`);
    });
  }

  getBlobFromUrl(url: string): Observable<SafeResourceUrl> {
    return this.http.get(url, {responseType: 'blob' })
    .pipe(
      catchError((err) => {
        console.log("Error getting blob: ", err);
        return EMPTY;
      }),
      map((result: Blob) => {
        console.log("Response - Blob", result);
        const objectUrl = createObjectUrl(result);
        return this.domSanitizer.bypassSecurityTrustResourceUrl(objectUrl);
      })
    );
  }
}
