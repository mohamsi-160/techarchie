import { Component, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-testimonial-simple-text-right',
  templateUrl: './testimonial-simple-text-right.component.html',
  styleUrls: ['./testimonial-simple-text-right.component.scss']
})
export class TestimonialSimpleTextRightComponent implements OnInit {
  quoteLeft = faQuoteLeft;

  constructor() {
    log.debug('TestimonialSimpleTextRightComponent - constructor');
  }

  ngOnInit() {
    log.debug('TestimonialSimpleTextRightComponent - init');
  }
}
