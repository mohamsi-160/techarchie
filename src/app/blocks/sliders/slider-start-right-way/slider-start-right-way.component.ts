import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-slider-start-right-way',
  templateUrl: './slider-start-right-way.component.html',
  styleUrls: ['./slider-start-right-way.component.scss']
})
export class SliderStartRightWayComponent implements OnInit {
  elements = ['Inbox', 'Calendar', 'Invoicing', 'Reporting'];
  longArrowAltRight = faLongArrowAltRight;
  currentSlide: number = 0;

  constructor() {
    log.debug('SliderStartRightWayComponent - constructor');
  }

  ngOnInit() {
    log.debug('SliderStartRightWayComponent - init');
  }

  updateSlider(currentSlide) {
    this.currentSlide = currentSlide;
  }

  public onIndexChange(index: number): void {
    this.currentSlide = index;
  }
}
