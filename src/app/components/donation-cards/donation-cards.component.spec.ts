import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCardsComponent } from './donation-cards.component';

describe('DonationCardsComponent', () => {
  let component: DonationCardsComponent;
  let fixture: ComponentFixture<DonationCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
