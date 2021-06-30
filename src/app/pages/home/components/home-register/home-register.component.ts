import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.scss']
})
export class HomeRegisterComponent implements OnInit {
  check = faCheck;
  features = [
    'frontend',
    'middleware',
    'backend',
    'infrastructure'
  ];

  constructor() {
    log.debug('HomeRegisterComponent - constructor');
  }

  ngOnInit() {
    log.debug('HomeRegisterComponent - init');
  }
}
