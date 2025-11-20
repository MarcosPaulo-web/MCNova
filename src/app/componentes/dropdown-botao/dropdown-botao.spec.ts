import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBotao } from './dropdown-botao';

describe('DropdownBotao', () => {
  let component: DropdownBotao;
  let fixture: ComponentFixture<DropdownBotao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownBotao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownBotao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
