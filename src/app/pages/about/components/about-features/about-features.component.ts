import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-about-features',
  templateUrl: './about-features.component.html',
  styleUrls: ['./about-features.component.scss']
})
export class AboutFeaturesComponent implements OnInit {
  features: object[] = [
    { icon: 'phone', title: 'Responsive' },
    { icon: 'settings', title: 'Customizable' },
    { icon: 'award', title: 'Clean Code' },
    { icon: 'star', title: 'Creative' },
    { icon: 'send', title: 'Ready-Content' },
    { icon: 'headphones', title: 'Supported' },
    { icon: 'hard-drive', title: 'Documented' },
    { icon: 'box', title: 'Components' }
  ];
  constructor() {
    log.debug('AboutFeaturesComponent - constructor');
  }

  ngOnInit() {
    log.debug('AboutFeaturesComponent - init');
  }
}
