import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-testimonial-simple-slider-boxed',
  templateUrl: './testimonial-simple-slider-boxed.component.html',
  styleUrls: ['./testimonial-simple-slider-boxed.component.scss']
})
export class TestimonialSimpleSliderBoxedComponent implements OnInit {
  constructor() {
    log.debug('TestimonialSimpleSliderBoxedComponent - constructor');
  }

  ngOnInit() {
    log.debug('TestimonialSimpleSliderBoxedComponent - init');
  }
}
