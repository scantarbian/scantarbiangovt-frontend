import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCoreComponent } from './home-core/home-core.component';

const homeRoutes: Routes = [
  {path: '', component: HomeCoreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
