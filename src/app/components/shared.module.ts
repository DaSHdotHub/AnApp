import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component'   

    @NgModule({
      declarations: [
        PickupCallCardComponent
    ],
      imports: [CommonModule],
      exports: [PickupCallCardComponent]
    ,
    })
    export class SharedModule {
      static rootComponent = PickupCallCardComponent
    }