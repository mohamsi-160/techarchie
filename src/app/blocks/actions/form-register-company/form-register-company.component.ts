import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');

@Component({
  selector: 'dc-form-register-company',
  templateUrl: './form-register-company.component.html',
  styleUrls: ['./form-register-company.component.scss']
})
export class FormRegisterCompanyComponent implements OnInit {
  constructor() {
    log.debug('FormRegisterCompanyComponent - constructor');
  }

  ngOnInit() {
    log.debug('FormRegisterCompanyComponent - init');
  }
}
