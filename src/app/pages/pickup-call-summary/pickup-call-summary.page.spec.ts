import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickupCallSummaryPage } from './pickup-call-summary.page';

describe('PickupCallSummaryPage', () => {
  let component: PickupCallSummaryPage;
  let fixture: ComponentFixture<PickupCallSummaryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupCallSummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
