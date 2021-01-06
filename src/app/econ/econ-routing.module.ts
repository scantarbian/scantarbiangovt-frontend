import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EconCoreComponent } from './econ-core/econ-core.component';

const econRoutes: Routes = [
  {path: '', component: EconCoreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(econRoutes)],
  exports: [RouterModule]
})
export class EconRoutingModule { }
