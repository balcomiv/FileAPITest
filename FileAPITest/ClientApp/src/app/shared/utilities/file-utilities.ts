import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export function getSafeUrl(url: string, domSanitizer: DomSanitizer): SafeResourceUrl {
    return domSanitizer.bypassSecurityTrustResourceUrl(url);
}

export function createObjectUrl(object: any): string {
    return window.URL.createObjectURL(object);
}