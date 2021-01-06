import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeCoreComponent } from './home-core/home-core.component'
import { CarouselComponent } from './carousel/carousel.component'


@NgModule({
  declarations: [CarouselComponent, HomeCoreComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }
