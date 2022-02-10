import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeYourOwnDayComponent } from './make-your-own-day.component';

describe('MakeYourOwnDayComponent', () => {
  let component: MakeYourOwnDayComponent;
  let fixture: ComponentFixture<MakeYourOwnDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeYourOwnDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeYourOwnDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
