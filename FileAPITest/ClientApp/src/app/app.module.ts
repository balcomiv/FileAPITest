import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiResponseSettingsModule } from './pages/api-response-settings/api-response-settings.module';
import { DocumentExportComponent } from './pages/document-export/document-export.component';
import { FetchPdfComponent } from './pages/fetch-pdf/fetch-pdf.component';
import { KitchenSinkComponent } from './pages/kitchen-sink/kitchen-sink.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './third-party/material/material.module';
import { SampleTestRigComponent } from './pages/sample-test-rig/sample-test-rig.component';
import { SafeUrlPipe } from './shared/pipes/safe-url.pipe';

@NgModule({
  imports: [
    //  This is temporary
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutsModule,
    //  App Modules
    ApiResponseSettingsModule
  ],
  declarations: [
    AppComponent,
    //  Get these into their pages modules
    DocumentExportComponent,
    FetchPdfComponent,
    KitchenSinkComponent,
    SampleTestRigComponent,
    SafeUrlPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
