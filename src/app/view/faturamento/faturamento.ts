import { Component } from '@angular/core';
import { Titulo } from '../../componentes/titulo/titulo';
import { DropdownBotao } from '../../componentes/dropdown-botao/dropdown-botao';
import { OptionDropdown } from '../../shared/models/option-dropdown';
import { Card } from '../../componentes/card/card';
import { CardFinanceiro } from '../../componentes/card-financeiro/card-financeiro';
import { Tabela } from '../../componentes/tabela/tabela';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faturamento',
  imports: [Titulo, DropdownBotao, Card, CardFinanceiro, Tabela, CommonModule],
  templateUrl: './faturamento.html',
  styleUrl: './faturamento.scss',
})
export class Faturamento {
  protected listaFiltro: OptionDropdown[] = [
    new OptionDropdown('Todos os Servoços'),
    new OptionDropdown('Mensal'),
    new OptionDropdown('Anual'),
  ];

  protected valorFiltro: string = '';
  getFiltro(valor: string) {
    this.valorFiltro = valor;
  }

  protected meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  getValorInputFiltro() {
    if (this.valorFiltro === 'Anual') {
      return new Date().getFullYear();
    } else if (this.valorFiltro === 'Mensal') {
      return this.meses[new Date().getMonth()];
    } else {
      return 'Todos os Períodos';
    }
  }

  cabecario: string[] = ['Número', 'Cliente', 'Data', 'Serviços', 'Peças', 'Total'];
  linhas: any[] = [
    {
      numero: 'OS-2025-002',
      cliente: 'Pedro Santos',
      data: '09/11/2025',
      servicos: 'R$ 300.00',
      pecas: 'R$ 225.00',
      total: 525.0,
    },
  ];
}
