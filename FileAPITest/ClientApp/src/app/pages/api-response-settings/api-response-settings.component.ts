import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'app-api-response-settings',
  templateUrl: './api-response-settings.component.html',
  styleUrls: ['./api-response-settings.component.scss']
})
export class ApiResponseSettingsComponent implements OnInit {

  constructor(public media: TdMediaService) {}

  ngOnInit() {
  }

}
