import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMackUpComponent } from './phone-mack-up.component';

describe('PhoneMackUpComponent', () => {
  let component: PhoneMackUpComponent;
  let fixture: ComponentFixture<PhoneMackUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneMackUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneMackUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
