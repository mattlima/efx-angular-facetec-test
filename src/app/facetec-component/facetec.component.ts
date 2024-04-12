import {
  Component,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

import { SampleApp } from '../browser-sdk/sample-apps/sample-app-ts/src/sampleAppController';



@Component({
  selector: 'efx-facetec',
  templateUrl: './facetec.component.html',
  styleUrls: ['./facetec.component.scss'],
})
export class FacetecComponent implements AfterViewInit {
  SampleApp: any;

  constructor(private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {
    cdr.detach();
    this.SampleApp = SampleApp;
  }


  ngAfterViewInit(): void {
    console.log('FacetecComponent init');
    SampleApp.initialize();
  }

  get classes(): string[] {
    return [`efx-facetec`, `efx-facetec--default`];
  }
}
