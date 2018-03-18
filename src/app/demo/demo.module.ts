import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  declarations: [DemoComponent, HelpComponent]
})
export class DemoModule { }
