import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mecanico } from './mecanico';

describe('Mecanico', () => {
  let component: Mecanico;
  let fixture: ComponentFixture<Mecanico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mecanico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mecanico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
