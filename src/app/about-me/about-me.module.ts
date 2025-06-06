import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, AboutMeRoutingModule, ButtonModule],
})
export class AboutMeModule {}
