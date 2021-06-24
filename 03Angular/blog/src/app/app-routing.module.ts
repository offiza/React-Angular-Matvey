import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainItemComponent} from './main-items/main-items.component'
import {AboutComponent} from './about/about.component'

const routes: Routes = [
  { path: 'Articles', component: MainItemComponent },
  { path: 'About', component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
