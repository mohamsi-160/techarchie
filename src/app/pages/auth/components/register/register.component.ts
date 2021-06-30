import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltRight,
  faUserPlus,
  faAddressCard,
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    userPlus: faUserPlus,
    addressCard: faAddressCard,
    envelope: faEnvelope,
    lock: faLock
  };

  constructor() {
    log.debug('RegisterComponent - constructor');
  }

  ngOnInit() {
    log.debug('RegisterComponent - init');
  }
}
