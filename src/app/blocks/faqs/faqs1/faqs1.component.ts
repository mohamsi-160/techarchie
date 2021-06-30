import { Component, OnInit, Input } from '@angular/core';
const log = new Logger('App');
@Component({
  selector: 'dc-faqs1',
  templateUrl: './faqs1.component.html',
  styleUrls: ['./faqs1.component.scss']
})
export class Faqs1Component implements OnInit {
  @Input()
  edge: string;

  @Input()
  background: string;

  @Input()
  classes: string;

  constructor() {
    log.debug('Faqs1Component - constructor');
  }

  ngOnInit() {
    log.debug('Faqs1Component - init');
  }
}
