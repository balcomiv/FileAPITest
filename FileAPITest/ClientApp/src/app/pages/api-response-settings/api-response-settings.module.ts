import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CovalentModule } from 'src/app/third-party/covalent/covalent.module';

import { ApiResponseSettingsComponent } from './api-response-settings.component';
import { MaterialModule } from 'src/app/third-party/material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ApiResponseSettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CovalentModule,
    MaterialModule
  ],
  exports: [
    ApiResponseSettingsComponent
  ]
})
export class ApiResponseSettingsModule { }
