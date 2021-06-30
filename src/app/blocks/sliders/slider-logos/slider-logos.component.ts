import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-slider-logos',
  templateUrl: './slider-logos.component.html',
  styleUrls: ['./slider-logos.component.scss']
})
export class SliderLogosComponent implements OnInit {
  public config: SwiperConfigInterface = {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loop: true,
    navigation: false,
    pagination: false
  };

  constructor() {
    log.debug('SliderLogosComponent - constructor');
  }

  ngOnInit() {
    log.debug('SliderLogosComponent - init');
  }
}
