import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  @Input() message: string | undefined;

  constructor() {
    log.debug('LoaderComponent - constructor');
  }

  ngOnInit() {
    log.debug('LoaderComponent - init');
  }
}
