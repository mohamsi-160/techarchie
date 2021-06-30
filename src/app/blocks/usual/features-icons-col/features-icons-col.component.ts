import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-features-icons-col',
  templateUrl: './features-icons-col.component.html',
  styleUrls: ['./features-icons-col.component.scss']
})
export class FeaturesIconsColComponent implements OnInit {
  elements = [
    { icon: 'image', title: 'Easily theme-able' },
    { icon: 'sliders', title: 'Professional tools' },
    {
      icon: 'target',
      title: 'Ready-to-use content'
    }
  ];

  constructor() {
    log.debug('FeaturesIconsColComponent - constructor');
  }

  ngOnInit() {
    log.debug('FeaturesIconsColComponent - init');
  }
}
