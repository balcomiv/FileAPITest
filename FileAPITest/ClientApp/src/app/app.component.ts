import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'UltimateAngularExamples';

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) 
  {
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
    this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));

    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
    this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));

    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-dark',
    this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-dark.svg'));

    // this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
    // this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg'));
    // this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
    // this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-mark.svg'));
    // this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
    // this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-ux.svg'));
    // this._iconRegistry.addSvgIconInNamespace('assets', 'appcenter',
    // this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'));
    // this._iconRegistry.addSvgIconInNamespace('assets', 'listener',
    // this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'));
    // this._iconRegistry.addSvgIconInNamespace('assets', 'querygrid',
    // this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'));
  }
}
