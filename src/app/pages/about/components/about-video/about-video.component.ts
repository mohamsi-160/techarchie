import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-about-video',
  templateUrl: './about-video.component.html',
  styleUrls: ['./about-video.component.scss']
})
export class AboutVideoComponent implements OnInit {
  constructor() {
    log.debug('AboutVideoComponent - constructor');
  }

  ngOnInit() {
    log.debug('AboutVideoComponent - init');
  }
}
