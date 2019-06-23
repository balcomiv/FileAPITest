import { Component, isDevMode, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileService } from 'src/app/shared/services/file.service';
import { TEST_URL, TEST_URL_DEV, DEV_PROTOCOL, DEV_DOMAIN, API_PATH, PROD_DOMAIN, PROD_PROTOCOL } from 'src/app/shared/utilities/url-utilities';

@Component({
  selector: 'app-sample-test-rig',
  templateUrl: './sample-test-rig.component.html',
  styleUrls: ['./sample-test-rig.component.scss']
})
export class SampleTestRigComponent implements OnInit {
  sourceUrl: string;
  protocol: string;
  domain: string;
  apiPath: string;

  fileName: string;
  returnFileName: string;
  inline: boolean;
  contentType: string;

  piadaPdfUrl = 'https://mypiada.com/documents/Menu2019T2.pdf';
  safePdfUrl: SafeResourceUrl;
  safeUrl: SafeResourceUrl;
  safeBlobUrl: SafeResourceUrl;

  contentTypeOptions: string[] = ['application/pdf', 'application/octet-stream', 'text/html'];

  constructor(
    private domSanitizer: DomSanitizer,
    private fileService: FileService
    ) { }

  ngOnInit() {
    this.configureInitialUrl();
    this.configureInitialQueryParams();
    this.buildSourceUrl();

    this.getBlobFromUrl(this.sourceUrl);

    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.piadaPdfUrl);
    this.safePdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.sourceUrl);
  }

  private configureInitialUrl() {
    if (isDevMode()) {
      this.protocol = DEV_PROTOCOL;
      this.domain = DEV_DOMAIN;
    } else {
      this.protocol = PROD_PROTOCOL;
      this.domain = PROD_DOMAIN;
    }
    this.apiPath = API_PATH;
  }

  private configureInitialQueryParams() {
    this.fileName = 'sample-3pp.pdf';
    this.contentType = 'application/pdf';
    this.inline = true;
    this.returnFileName='returnedFile.pdf';
  }

  private buildSourceUrl() {
    this.sourceUrl = `${this.protocol}${this.domain}${this.apiPath}?fileName=${this.fileName}&contentType=${this.contentType}&inline=${this.inline}`;
    // alert(this.sourceUrl);
  }

  private getBlobFromUrl(url: string) {
    this.fileService.getBlobFromUrl(url)
    .subscribe((safeUrl) => {
      this.safeBlobUrl = safeUrl;
    });
  }

  // #region Event Handlers
  onFileNameChange(fileName: string) {
    console.log('File Name: ', fileName);
    this.fileName = fileName;
    this.buildSourceUrl();
  }

  onReturnFileNameChange(returnFileName: string) {
    console.log('File Name: ', returnFileName);
    this.returnFileName = returnFileName;
    this.buildSourceUrl();
  }

  onInlineChange(inline: boolean) {
    console.log('Inline: ', inline);
    this.inline = inline;
    this.buildSourceUrl();
  }

  onContentTypeChange(contentType: string) {
    console.log('Content Type: ', contentType);
    this.contentType = contentType;
    this.buildSourceUrl();
  }

  // #endregion

}
