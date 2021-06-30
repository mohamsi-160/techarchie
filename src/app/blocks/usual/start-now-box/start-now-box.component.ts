import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-start-now-box',
  templateUrl: './start-now-box.component.html',
  styleUrls: ['./start-now-box.component.scss']
})
export class StartNowBoxComponent implements OnInit {
  constructor() {
    log.debug('StartNowBoxComponent - constructor');
  }

  ngOnInit() {
    log.debug('StartNowBoxComponent - init');
  }
}
