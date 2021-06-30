import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-home-how-it-works',
  templateUrl: './home-how-it-works.component.html',
  styleUrls: ['./home-how-it-works.component.scss']
})
export class HomeHowItWorksComponent implements OnInit {
  elements = [
    {
      icon: 'start',
      title: 'Start the tool',
      description:
        'All you have to do is simply click on start button.'
    },
    {
      icon: 'plan',
      title: 'Run the wizard',
      description:
        'Walkthrough all steps of the wizard answering questions to the best of your knowledge.'
    },
    {
      icon: 'result',
      title: "Produce the result",
      description:
        'Result will be produced based on the answers selected and a unique url will be sent to you as an email.'
    }
  ];
  constructor() {
    log.debug('HomeHowItWorksComponent - constructor');
  }

  ngOnInit() {
    log.debug('HomeHowItWorksComponent - init');
  }
}
