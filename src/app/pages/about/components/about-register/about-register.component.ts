import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-about-register',
  templateUrl: './about-register.component.html',
  styleUrls: ['./about-register.component.scss']
})
export class AboutRegisterComponent implements OnInit {
  constructor() {
    log.debug('AboutRegisterComponent - constructor');
  }

  ngOnInit() {
    log.debug('AboutRegisterComponent - init');
  }
}
