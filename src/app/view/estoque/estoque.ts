import { Component } from '@angular/core';
import { Titulo } from '../../componentes/titulo/titulo';
import { Card } from '../../componentes/card/card';
import { PesquisaFiltro } from '../../componentes/pesquisa-filtro/pesquisa-filtro';
import { OptionDropdown } from '../../shared/models/option-dropdown';
import { Tabela } from '../../componentes/tabela/tabela';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estoque',
  imports: [Titulo, Card, PesquisaFiltro, Tabela, CommonModule],
  templateUrl: './estoque.html',
  styleUrl: './estoque.scss',
})
export class Estoque {
  protected listaCategorias: OptionDropdown[] = [
    new OptionDropdown('Todas as categorias'),
    new OptionDropdown('Peças'),
  ];

  protected listaCabecario: string[] = [
    'Código',
    'Produto',
    'Categoria',
    'Quantidade',
    'Qtd. Mínima',
    'Valor Unit.',
    'Valor Total',
    'Status',
    'Ações',
  ];

  protected listaBody = [
    {
      codigo: 'P001',
      descricao: 'Velas de ignição (jogo)\nFornecedor A',
      categoria: 'Peças',
      quantidade: '50',
      estoqueMinimo: '10',
      precoUnitario: 'R$ 120.00',
      precoTotal: 'R$ 6000.00',
      status: 'normal',
    },
    {
      codigo: 'P002',
      descricao: 'Filtro de óleo\nFornecedor B',
      categoria: 'Peças',
      quantidade: '120',
      estoqueMinimo: '20',
      precoUnitario: 'R$ 35.00',
      precoTotal: 'R$ 4200.00',
      status: 'normal',
    },
    {
      codigo: 'P003',
      descricao: 'Pastilhas de freio (par)\nFornecedor C',
      categoria: 'Peças',
      quantidade: '15',
      estoqueMinimo: '10',
      precoUnitario: 'R$ 190.00',
      precoTotal: 'R$ 2850.00',
      status: 'baixo',
    },
    {
      codigo: 'P004',
      descricao: 'Óleo sintético 5W30 (1L)\nFornecedor D',
      categoria: 'Lubrificantes',
      quantidade: '8',
      estoqueMinimo: '12',
      precoUnitario: 'R$ 45.00',
      precoTotal: 'R$ 360.00',
      status: 'crítico',
    },
    {
      codigo: 'P005',
      descricao: 'Correia dentada\nFornecedor E',
      categoria: 'Peças',
      quantidade: '25',
      estoqueMinimo: '5',
      precoUnitario: 'R$ 85.00',
      precoTotal: 'R$ 2125.00',
      status: 'normal',
    },
    {
      codigo: 'P006',
      descricao: 'Amortecedor traseiro\nFornecedor F',
      categoria: 'Suspensão',
      quantidade: '6',
      estoqueMinimo: '8',
      precoUnitario: 'R$ 310.00',
      precoTotal: 'R$ 1860.00',
      status: 'baixo',
    },
    {
      codigo: 'P007',
      descricao: 'Bateria 60Ah\nFornecedor A',
      categoria: 'Elétrica',
      quantidade: '3',
      estoqueMinimo: '5',
      precoUnitario: 'R$ 480.00',
      precoTotal: 'R$ 1440.00',
      status: 'crítico',
    },
    {
      codigo: 'P008',
      descricao: 'Pneu 205/55 R16\nFornecedor G',
      categoria: 'Pneus',
      quantidade: '40',
      estoqueMinimo: '20',
      precoUnitario: 'R$ 350.00',
      precoTotal: 'R$ 14000.00',
      status: 'normal',
    },
    {
      codigo: 'P009',
      descricao: 'Kit embreagem completo\nFornecedor H',
      categoria: 'Transmissão',
      quantidade: '12',
      estoqueMinimo: '8',
      precoUnitario: 'R$ 750.00',
      precoTotal: 'R$ 9000.00',
      status: 'normal',
    },
    {
      codigo: 'P010',
      descricao: 'Sensor de oxigênio (sonda lambda)\nFornecedor I',
      categoria: 'Eletrônica',
      quantidade: '7',
      estoqueMinimo: '10',
      precoUnitario: 'R$ 220.00',
      precoTotal: 'R$ 1540.00',
      status: 'baixo',
    },
  ];

  protected valorPesquisa: string = '';
  protected filtro: string = '';

  getPesquisa(valor: string) {
    this.valorPesquisa = valor;
  }
  getFiltro(valor: string) {
    this.filtro = valor;
  }
}
