import { Component, OnInit } from '@angular/core';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-testimonial-simple-slider',
  templateUrl: './testimonial-simple-slider.component.html',
  styleUrls: ['./testimonial-simple-slider.component.scss']
})
export class TestimonialSimpleSliderComponent implements OnInit {
  faQuoteRight = faQuoteRight;

  public config: SwiperConfigInterface = {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: false,
    navigation: true,
    pagination: false
  };

  constructor() {
    log.debug('TestimonialSimpleSliderComponent - constructor');
  }

  ngOnInit() {
    log.debug('TestimonialSimpleSliderComponent - init');
  }
}
