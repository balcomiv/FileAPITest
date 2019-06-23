import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiResponseSettingsComponent } from './pages/api-response-settings/api-response-settings.component';
import { DocumentExportComponent } from './pages/document-export/document-export.component';
import { FetchPdfComponent } from './pages/fetch-pdf/fetch-pdf.component';
import { KitchenSinkComponent } from './pages/kitchen-sink/kitchen-sink.component';
import { SampleTestRigComponent } from './pages/sample-test-rig/sample-test-rig.component';

const routes: Routes = [
  { path: '', redirectTo: '/sample-test-rig', pathMatch: 'full' },
  // { path: 'file-upload', component: FileUploadComponent },
  { path: 'fetch-pdf', component: FetchPdfComponent },
  { path: 'document-export', component: DocumentExportComponent },
  { path: 'sample-test-rig', component: SampleTestRigComponent },
  { path: 'api-response-settings', component: ApiResponseSettingsComponent },
  // { path: 'kitchen-sink', component: KitchenSinkComponent },
  { path: 'kitchen-sink', redirectTo: 'sample-test-rig'},
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
