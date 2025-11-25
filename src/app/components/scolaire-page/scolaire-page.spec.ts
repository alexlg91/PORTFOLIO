import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScolairePage } from './scolaire-page';

describe('ScolairePage', () => {
  let component: ScolairePage;
  let fixture: ComponentFixture<ScolairePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScolairePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScolairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
