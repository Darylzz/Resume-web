import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

const component = [HomeComponent];

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
