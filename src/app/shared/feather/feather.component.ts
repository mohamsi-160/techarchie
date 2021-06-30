import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-feather',
  templateUrl: './feather.component.html',
  styleUrls: ['./feather.component.scss']
})
export class FeatherComponent implements OnInit {
  @Input() name!: string;
  @Input() iconClass: string;
  @Input() size: number = 36;

  constructor() {
    log.debug('FeatherComponent - constructor');
  }

  ngOnInit() {
    log.debug('FeatherComponent - init');
  }
}
