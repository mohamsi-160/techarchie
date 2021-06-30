import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-slider-icons',
  templateUrl: './slider-icons.component.html',
  styleUrls: ['./slider-icons.component.scss']
})
export class SliderIconsComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  bordered: boolean = true;

  @Input()
  edge: string;

  @Input()
  background: string;

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
    log.debug('SliderIconsComponent - constructor');
  }

  ngOnInit() {
    log.debug('SliderIconsComponent - init');
  }
}
