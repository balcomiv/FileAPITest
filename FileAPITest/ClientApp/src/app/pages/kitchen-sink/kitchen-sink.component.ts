import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss']
})
export class KitchenSinkComponent implements OnInit {
  url: string = 'http://funwithfiles.notyourtypicalprogrammer.com/api/Files?fileName=sample-3pp.pdf&contentType=application/pdf&inline=true';

  anchorHtml: string = '<a href="s>Download</a>';

  constructor() { }

  ngOnInit() {
    if (isDevMode()) {
      this.url = 'https://localhost:44305/api/Files?fileName=sample-3pp.pdf&contentType=application/pdf&inline=true';
    }
  }

}
