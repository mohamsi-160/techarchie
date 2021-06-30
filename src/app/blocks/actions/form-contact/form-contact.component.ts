import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');

@Component({
  selector: 'dc-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
  constructor() {
    log.debug('FormContactComponent - constructor');
  }

  ngOnInit() {
    log.debug('FormContactComponent - init');
  }
}
