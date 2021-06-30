import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-home-extend-core',
  templateUrl: './home-extend-core.component.html',
  styleUrls: ['./home-extend-core.component.scss']
})
export class HomeExtendCoreComponent implements OnInit {
  icons = [
    { name: 'blossom', size: 'icon-xl', position: { left: 100, top: 30 } },
    { name: 'dockbit', size: 'icon-xxl', position: { left: 60, top: -10 } },
    { name: 'zapier', size: 'icon-xxl', position: { left: 25, top: 0 } },
    { name: 'bitnami', size: 'icon-2xl', position: { left: 0, top: 50 } },
    { name: 'slack', size: 'icon-2xxl', position: { left: 23, top: 70 } },
    { name: 'monero', size: 'icon-xxl', position: { left: 65, top: 44 } },
    { name: 'dropbox', size: 'icon-xl', position: { left: 95, top: 83 } }
  ];

  constructor() {
    log.debug('HomeExtendCoreComponent - constructor');
  }

  ngOnInit() {
    log.debug('HomeExtendCoreComponent - init');
  }
}
