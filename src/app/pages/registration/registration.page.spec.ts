import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { RegistrationPage } from './registration.page';

describe('RegistrationPage', () => {
  let component: RegistrationPage;
  let fixture: ComponentFixture<RegistrationPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationPage);

    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  })
  it ('should go to home page on registration', () => {
    spyOn(router,'navigate');
    component.goToHome();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });;
});
