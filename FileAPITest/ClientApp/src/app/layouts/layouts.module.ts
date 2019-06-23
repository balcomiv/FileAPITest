import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentModule } from '../third-party/covalent/covalent.module';
import { NavListComponent } from './nav-list/nav-list.component';
import { NavViewComponent } from './nav-view/nav-view.component';
import { ManagementListComponent } from './management-list/management-list.component';
import { MaterialModule } from '../third-party/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavListComponent,
    NavViewComponent,
    ManagementListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CovalentModule,
  ],
  exports: [
    NavListComponent,
    NavViewComponent,
    ManagementListComponent
  ]
})
export class LayoutsModule { }
