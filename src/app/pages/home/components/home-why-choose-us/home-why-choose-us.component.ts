import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-home-why-choose-us',
  templateUrl: './home-why-choose-us.component.html',
  styleUrls: ['./home-why-choose-us.component.scss']
})
export class HomeWhyChooseUsComponent implements OnInit {
  features = [
    {
      name: 'Integrations',
      icon: 'box',
      description:
        'We designed DashCore to be able to integrate with additional templates designed by our team'
    },
    {
      name: 'Components',
      icon: 'layers',
      description:
        'All its components share a core styling, this will allow to share multiple components where you need'
    }
  ];

  constructor() {
    log.debug('HomeWhyChooseUsComponent - constructor');
  }

  ngOnInit() {
    log.debug('HomeWhyChooseUsComponent - init');
  }
}
