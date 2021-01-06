import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdpInfoComponent } from './gdp-info/gdp-info.component';
import { BudgetInfoComponent } from './budget-info/budget-info.component';
import { EconCoreComponent } from './econ-core/econ-core.component';
import { EconRoutingModule } from './econ-routing.module';
import { EconpillarsComponent } from './econpillars/econpillars.component'



@NgModule({
  declarations: [GdpInfoComponent, BudgetInfoComponent, EconCoreComponent, EconpillarsComponent],
  imports: [
    CommonModule,
    EconRoutingModule
  ]
})
export class EconModule { }
