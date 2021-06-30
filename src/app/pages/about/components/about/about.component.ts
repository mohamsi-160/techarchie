import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {
    log.debug('AboutComponent - constructor');
  }

  ngOnInit() {
    log.debug('AboutComponent - init');
  }
}
