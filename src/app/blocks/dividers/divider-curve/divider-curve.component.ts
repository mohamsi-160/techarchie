import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-divider-curve',
  templateUrl: './divider-curve.component.html',
  styleUrls: ['./divider-curve.component.scss']
})
export class DividerCurveComponent implements OnInit {
  @Input()
  cssClass: string;

  @Input()
  shapeCssText: string;

  constructor() {
    log.debug('DividerCurveComponent - constructor');
  }

  ngOnInit() {
    log.debug('DividerCurveComponent - init');
  }
}
