import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-big-screen',
  templateUrl: './big-screen.component.html',
  styleUrls: ['./big-screen.component.scss']
})
export class BigScreenComponent implements OnInit {
  @Input()
  img: string;

  @Input()
  screenPos: string;

  @Input()
  imgShape: string;

  constructor() {
    log.debug('BigScreenComponent - constructor');
  }

  ngOnInit() {
    log.debug('BigScreenComponent - init');
  }

  isScreenLeft(): boolean {
    return this.screenPos === 'left';
  }
}
