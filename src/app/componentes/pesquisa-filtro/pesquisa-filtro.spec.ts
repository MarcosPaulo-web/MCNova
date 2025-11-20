import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaFiltro } from './pesquisa-filtro';

describe('PesquisaFiltro', () => {
  let component: PesquisaFiltro;
  let fixture: ComponentFixture<PesquisaFiltro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaFiltro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaFiltro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
