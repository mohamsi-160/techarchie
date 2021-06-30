import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {
    log.debug('WizardComponent - constructor');
  }

  ngOnInit() {
    log.debug('WizardComponent - init');
  }
}
