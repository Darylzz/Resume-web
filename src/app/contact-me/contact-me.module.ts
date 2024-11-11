import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactMeRoutingModule } from './contact-me-routing.module';
import { ContactMeComponent } from './contact-me.component';

const component = [ContactMeComponent];

@NgModule({
  declarations: [...component],
  imports: [CommonModule, ContactMeRoutingModule],
})
export class ContactMeModule {}
