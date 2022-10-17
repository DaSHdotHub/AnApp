import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  })
  it('should navigate to PickupCallSummary', () => {
    spyOn(router,'navigate');
    component.goToPickupCallSummary();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call-summary']);
  })
  it('should navigate to PickupCallSummary', () => {
    spyOn(router,'navigate');
    component.goToPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  });
});
