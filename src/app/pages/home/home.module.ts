import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CtaModule } from '@app/blocks/cta/cta.module';
import { SlidersModule } from '@app/blocks/sliders/sliders.module';
import { TestimonialsModule } from '@app/blocks/testimonials/testimonials.module';
import { FootersModule } from '@app/blocks/footers/footers.module';
import { UsualModule } from '@app/blocks/usual/usual.module';
import { ActionsModule } from '@app/blocks/actions/actions.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomeHeadingComponent } from './components/home-heading/home-heading.component';
import { HomeBubblesComponent } from './components/home-bubbles/home-bubbles.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { ShellModule } from '@app/shell/shell.module';
import { HomeHowItWorksComponent } from './components/home-how-it-works/home-how-it-works.component';
import { HomeBuiltTechComponent } from './components/home-built-tech/home-built-tech.component';
import { HomeExtendCoreComponent } from './components/home-extend-core/home-extend-core.component';
import { HomeLatestProjectsComponent } from './components/home-latest-projects/home-latest-projects.component';
import { HomeRegisterComponent } from './components/home-register/home-register.component';
import { HomeWhyChooseUsComponent } from './components/home-why-choose-us/home-why-choose-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeadingComponent,
    HomeBubblesComponent,
    BubbleComponent,
    HomeHowItWorksComponent,
    HomeBuiltTechComponent,
    HomeExtendCoreComponent,
    HomeLatestProjectsComponent,
    HomeRegisterComponent,
    HomeWhyChooseUsComponent
  ],
  imports: [
    SharedModule,
    CtaModule,
    SlidersModule,
    TestimonialsModule,
    FootersModule,
    UsualModule,
    ActionsModule,
    ShellModule,
    HomeRoutingModule
  ]
})
export class HomeModule{}
