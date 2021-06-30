import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.scss']
})
export class Footer1Component implements OnInit {
  fa = {
    faFacebook: faFacebook,
    faTwitter: faTwitter,
    faInstagram: faInstagram
  };

  constructor() {
    log.debug('Footer1Component - constructor');
  }

  ngOnInit() {
    log.debug('Footer1Component - init');
  }
}
