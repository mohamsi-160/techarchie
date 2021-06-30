import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-home-built-tech',
  templateUrl: './home-built-tech.component.html',
  styleUrls: ['./home-built-tech.component.scss']
})
export class HomeBuiltTechComponent implements OnInit {
  stacks = [
    { name: 'Javascript', image: 'robo1' },
    { name: 'Javascript', image: 'robo2' },
    { name: 'Styles', image: 'robo3' }
  ];
  items = [
    { icon: 'zap', title: 'frontend', description: 'frameworks & language' },
    {
      icon: 'activity',
      title: 'middleware',
      description: 'authentication & integration'
    },
    { icon: 'hexagon', title: 'backend', description: 'database & storage' },
    { icon: 'upload-cloud', title: 'infrastructure', description: 'cloud & underlying tech' }
  ];

  constructor() {
    log.debug('HomeBuiltTechComponent - constructor');
  }

  ngOnInit() {
    log.debug('HomeBuiltTechComponent - init');
  }
}
