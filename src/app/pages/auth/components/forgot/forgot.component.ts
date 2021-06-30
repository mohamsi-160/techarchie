import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltRight,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    envelope: faEnvelope
  };

  constructor() {
    log.debug('ForgotComponent - constructor');
  }

  ngOnInit() {
    log.debug('ForgotComponent - init');
  }
}
