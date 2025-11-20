import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoGrande } from './botao-grande';

describe('BotaoGrande', () => {
  let component: BotaoGrande;
  let fixture: ComponentFixture<BotaoGrande>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoGrande]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoGrande);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
