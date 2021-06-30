import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CountersModule } from '@app/blocks/counters/counters.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ActionsModule } from '@app/blocks/actions/actions.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './components/results/results.component';
import { ResultsPrereqComponent } from './components/results-prereq/results-prereq.component';
import { ResultsTierComponent } from './components/results-tier/results-tier.component';
import { ResultsDeployComponent } from './components/results-deploy/results-deploy.component';
import { AboutVideoComponent } from './components/about-video/about-video.component';
import { AboutSolutionsComponent } from './components/about-solutions/about-solutions.component';
import { AboutFeaturesComponent } from './components/about-features/about-features.component';
import { AboutCustomersComponent } from './components/about-customers/about-customers.component';
import { AboutTeamComponent } from './components/about-team/about-team.component';
import { AboutRegisterComponent } from './components/about-register/about-register.component';

@NgModule({
  imports: [
    SharedModule,
    CountersModule,
    FootersModule,
    UsualModule,
    ActionsModule,
    SwiperModule,
    NgbTabsetModule,
    ResultsRoutingModule
  ],
  declarations: [
    ResultsComponent,
    ResultsPrereqComponent,
    ResultsTierComponent,
    ResultsDeployComponent,
    AboutVideoComponent,
    AboutSolutionsComponent,
    AboutFeaturesComponent,
    AboutCustomersComponent,
    AboutTeamComponent,
    AboutRegisterComponent
  ]
})
export class ResultsModule {}
