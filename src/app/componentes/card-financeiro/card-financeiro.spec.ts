import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFinanceiro } from './card-financeiro';

describe('CardFinanceiro', () => {
  let component: CardFinanceiro;
  let fixture: ComponentFixture<CardFinanceiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFinanceiro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFinanceiro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
