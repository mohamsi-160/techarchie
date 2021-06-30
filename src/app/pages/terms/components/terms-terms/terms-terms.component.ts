import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-terms-terms',
  templateUrl: './terms-terms.component.html',
  styleUrls: ['./terms-terms.component.scss']
})
export class TermsTermsComponent implements OnInit {
  constructor() {
    log.debug('TermsTermsComponent - constructor');
  }

  ngOnInit() {
    log.debug('TermsTermsComponent - init');
  }
}
