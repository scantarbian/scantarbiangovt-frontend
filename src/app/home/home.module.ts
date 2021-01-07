import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxModule , ParallaxConfig  } from 'ngx-parallax';
import { HomeRoutingModule } from './home-routing.module';
import { HomeCoreComponent } from './home-core/home-core.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { FeaturedComponent } from './featured/featured.component';



@NgModule({
  declarations: [HomeCoreComponent, WelcomeComponent, ThingsToDoComponent, QuickLinksComponent, FeaturedComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ParallaxModule,
  ]
})

export class HomeModule { }
