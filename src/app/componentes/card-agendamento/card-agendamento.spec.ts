import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAgendamento } from './card-agendamento';

describe('CardAgendamento', () => {
  let component: CardAgendamento;
  let fixture: ComponentFixture<CardAgendamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAgendamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAgendamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
