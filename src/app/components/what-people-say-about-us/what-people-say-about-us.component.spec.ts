import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatPeopleSayAboutUsComponent } from './what-people-say-about-us.component';

describe('WhatPeopleSayAboutUsComponent', () => {
  let component: WhatPeopleSayAboutUsComponent;
  let fixture: ComponentFixture<WhatPeopleSayAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatPeopleSayAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatPeopleSayAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
