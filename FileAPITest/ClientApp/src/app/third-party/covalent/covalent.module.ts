import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentMediaModule } from '@covalent/core/media';

/* any other core modules */
// (optional) Additional Covalent Modules imports
// import { CovalentHttpModule } from '@covalent/http';
// import { CovalentHighlightModule } from '@covalent/highlight';
// import { CovalentMarkdownModule } from '@covalent/markdown';
// import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule
    // (optional) Additional Covalent Modules imports
    // CovalentHttpModule.forRoot(),
    // CovalentHighlightModule,
    // CovalentMarkdownModule,
    // CovalentDynamicFormsModule,
  ],
  exports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule
  ]
})
export class CovalentModule { }
