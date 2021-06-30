import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-slider-all-in-one',
  templateUrl: './slider-all-in-one.component.html',
  styleUrls: ['./slider-all-in-one.component.scss']
})
export class SliderAllInOneComponent implements OnInit {
  currentSlide: number = 0;

  constructor() {}

  ngOnInit() {}

  updateSlider(currentSlide) {
    this.currentSlide = currentSlide;
    log.debug('SliderAllInOneComponent - constructor');
  }

  public onIndexChange(index: number): void {
    this.currentSlide = index;
    log.debug('SliderAllInOneComponent - init');
  }
}
