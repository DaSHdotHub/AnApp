import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallSummaryPageRoutingModule } from './pickup-call-summary-routing.module';

import { PickupCallSummaryPage } from './pickup-call-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallSummaryPageRoutingModule
  ],
  declarations: [PickupCallSummaryPage]
})
export class PickupCallSummaryPageModule {}
