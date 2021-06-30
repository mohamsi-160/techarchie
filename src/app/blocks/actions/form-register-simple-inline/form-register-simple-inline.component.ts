import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-form-register-simple-inline',
  templateUrl: './form-register-simple-inline.component.html',
  styleUrls: ['./form-register-simple-inline.component.scss']
})
export class FormRegisterSimpleInlineComponent implements OnInit {
  @Input()
  label: string = 'Register';

  @Input()
  inputClass: string;

  constructor() {
    log.debug('FormRegisterSimpleInlineComponent - constructor');
  }

  ngOnInit() {
    log.debug('FormRegisterSimpleInlineComponent - init');
  }
}
