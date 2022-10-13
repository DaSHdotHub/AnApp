import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallSummaryPageRoutingModule } from './pickup-call-summary-routing.module';

import { PickupCallSummaryPage } from './pickup-call-summary.page';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallSummaryPageRoutingModule
  ],
  declarations: [
    PickupCallSummaryPage,
    PickupCallCardComponent
]
})
export class PickupCallSummaryPageModule {}
