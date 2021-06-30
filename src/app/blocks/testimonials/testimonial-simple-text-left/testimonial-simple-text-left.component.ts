import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-testimonial-simple-text-left',
  templateUrl: './testimonial-simple-text-left.component.html',
  styleUrls: ['./testimonial-simple-text-left.component.scss']
})
export class TestimonialSimpleTextLeftComponent implements OnInit {
  constructor() {
    log.debug('TestimonialSimpleTextLeftComponent - constructor');
  }

  ngOnInit() {
    log.debug('TestimonialSimpleTextLeftComponent - init');
  }
}
