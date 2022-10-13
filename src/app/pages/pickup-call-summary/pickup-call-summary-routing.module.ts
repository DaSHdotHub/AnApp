import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupCallSummaryPage } from './pickup-call-summary.page';

const routes: Routes = [
  {
    path: '',
    component: PickupCallSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupCallSummaryPageRoutingModule {}
