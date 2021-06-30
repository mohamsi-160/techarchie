import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-page-header-wave',
  templateUrl: './page-header-wave.component.html',
  styleUrls: ['./page-header-wave.component.scss']
})
export class PageHeaderWaveComponent implements OnInit {
  @Input() rows: number;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() fill: string;
  @Input() containerClass: string;

  constructor() {
    log.debug('PageHeaderWaveComponent - constructor');
  }

  ngOnInit() {
    log.debug('PageHeaderWaveComponent - init');
  }

  getShapeFill(): string {
    return this.fill || 'shape-fill-contrast';
  }
}
