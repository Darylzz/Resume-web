import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';

const component = [HomeComponent];

@NgModule({
  declarations: [...component],
  imports: [CommonModule, HomeRoutingModule, ProgressBarModule, ButtonModule],
})
export class HomeModule {}
