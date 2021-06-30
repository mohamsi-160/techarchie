import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-developer-designer',
  templateUrl: './developer-designer.component.html',
  styleUrls: ['./developer-designer.component.scss']
})
export class DeveloperDesignerComponent implements OnInit {
  constructor() {
    log.debug('DeveloperDesignerComponent - constructor');
  }

  ngOnInit() {
    log.debug('DeveloperDesignerComponent - init');
  }
}
