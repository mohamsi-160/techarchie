import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-testimonials-slider',
  templateUrl: './testimonials-slider.component.html',
  styleUrls: ['./testimonials-slider.component.scss']
})
export class TestimonialsSliderComponent implements OnInit {
  public config: SwiperConfigInterface = {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: false,
    navigation: true,
    pagination: false
  };

  constructor() {
    log.debug('TestimonialsSliderComponent - constructor');
  }

  ngOnInit() {
    log.debug('TestimonialsSliderComponent - init');
  }
}
