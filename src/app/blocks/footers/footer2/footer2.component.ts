import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss']
})
export class Footer2Component implements OnInit {
  fa = {
    facebookF: faFacebookF,
    twitter: faTwitter,
    instagram: faInstagram,
    linkedinIn: faLinkedinIn,
    rss: faRss
  };

  constructor() {
    log.debug('Footer2Component - constructor');
  }

  ngOnInit() {
    log.debug('Footer2Component - init');
  }
}
