import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeCoreComponent } from './home-core/home-core.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component'


@NgModule({
  declarations: [HomeCoreComponent, WelcomeComponent, ThingsToDoComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }
