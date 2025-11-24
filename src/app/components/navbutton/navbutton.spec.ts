import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbutton } from './navbutton';

describe('Navbutton', () => {
  let component: Navbutton;
  let fixture: ComponentFixture<Navbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
