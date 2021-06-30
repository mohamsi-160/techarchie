import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
const STICKY_POINT = 90;

@Component({
  selector: 'dc-navbar-shell',
  templateUrl: './navbar-shell.component.html',
  styleUrls: ['./navbar-shell.component.scss']
})
export class NavbarShellComponent implements OnInit {
  @Input()
  useOnlyDarkLogo: boolean;

  @Input()
  darkLinks: boolean;

  navbarExpanded: boolean;
  navbarSticky: boolean;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= STICKY_POINT) {
      this.navbarSticky = true;
    } else {
      this.navbarSticky = false;
    }
  }

  constructor() {
    log.debug('NavbarShellComponent - constructor');
  }

  ngOnInit() {
    log.debug('NavbarShellComponent - init');
  }

  toggleNavbar() {
    this.navbarExpanded = !this.navbarExpanded;
  }
}
