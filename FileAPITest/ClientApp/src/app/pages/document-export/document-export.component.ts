import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-export',
  templateUrl: './document-export.component.html',
  styleUrls: ['./document-export.component.scss']
})
export class DocumentExportComponent implements OnInit {
  state$: Observable<object>;
  
  showLink = true;

  private fileType: string;


  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(
        map(() => window.history.state),
      );
    
    this.activatedRoute.params
      .pipe(
        // filter(params => params.fileName)
        tap(params => console.log("params: ", params))
      ).subscribe(params => {
        // put the code from `ngOnInit` here
        
        this.fileType = params.type;

        if (!this.fileType) {
          console.warn(`Missing File Type ${params}`);
        } else if (this.fileType === 'PDF') {
          this.showLink = false;
        }

      });

      this.activatedRoute.queryParams.subscribe(val => {
        // put the code from `ngOnInit` here
        console.log("Query Params", val);
        console.log("State", window.history.state);
      });
  }

}
