import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriPage } from './peri-page';

describe('PeriPage', () => {
  let component: PeriPage;
  let fixture: ComponentFixture<PeriPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
