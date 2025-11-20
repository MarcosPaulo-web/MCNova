import { Component } from '@angular/core';
import { Titulo } from '../../componentes/titulo/titulo';
import { PesquisaFiltro } from '../../componentes/pesquisa-filtro/pesquisa-filtro';
import { OptionDropdown } from '../../shared/models/option-dropdown';
import { Tabela } from '../../componentes/tabela/tabela';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ordens-servico',
  imports: [Titulo, PesquisaFiltro, Tabela, CommonModule],
  templateUrl: './ordens-servico.html',
  styleUrl: './ordens-servico.scss',
})
export class OrdensServico {
  protected listFiltro: OptionDropdown[] = [
    new OptionDropdown('Todos os status'),
    new OptionDropdown('Aberta'),
    new OptionDropdown('Em Andamento'),
    new OptionDropdown('Aguardando Peças'),
    new OptionDropdown('Finalizada'),
    new OptionDropdown('Entregue'),
    new OptionDropdown('Cancelada'),
  ];

  protected inputText: string = '';
  protected filtroSelecionado: string = '';

  receberFiltro(valor: string) {
    this.filtroSelecionado = valor;
  }
  receberInputText(valor: string) {
    this.inputText = valor;
  }

  protected cabecalho: string[] = [
    'OS',
    'Cliente',
    'Veículo',
    'Mecânico',
    'Status',
    'Data Abertura',
    'Valor',
    'Ações',
  ];

  listaOS = [
    {
      os: 'OS-2025-001',
      cliente: 'Maria Cliente',
      veiculo: {
        placa: 'ABC-1234',
        modelo: 'Honda Civic',
      },
      mecanico: 'Carlos Mecânico',
      status: 'Em Andamento',
      statusClass: 'warning', // badge amarela
      dataAbertura: '07/11/2025',
      valor: 780.0,
      acao: 'ver',
    },
    {
      os: 'OS-2025-002',
      cliente: 'Pedro Santos',
      veiculo: {
        placa: 'XYZ-5678',
        modelo: 'Toyota Corolla',
      },
      mecanico: 'Fernando Alves',
      status: 'Finalizada',
      statusClass: 'success', // badge verde
      dataAbertura: '08/11/2025',
      valor: 525.0,
      acao: 'ver',
    },
    {
      os: 'OS-2025-003',
      cliente: 'Ana Costa',
      veiculo: {
        placa: 'DEF-9012',
        modelo: 'Chevrolet Onix',
      },
      mecanico: 'Fernando Alves',
      status: 'Aguardando Peças',
      statusClass: 'warning', // badge amarela escura
      dataAbertura: '09/11/2025',
      valor: 350.0,
      acao: 'ver',
    },
    {
      os: 'OS-2025-004',
      cliente: 'Maria Cliente',
      veiculo: {
        placa: 'ABC-1234',
        modelo: 'Honda Civic',
      },
      mecanico: 'Carlos Mecânico',
      status: 'Entregue',
      statusClass: 'secondary', // badge cinza
      dataAbertura: '24/10/2025',
      valor: 555.0,
      acao: 'ver',
    },
    {
      os: 'OS-2025-005',
      cliente: 'Pedro Santos',
      veiculo: {
        placa: 'XYZ-5678',
        modelo: 'Toyota Corolla',
      },
      mecanico: 'Roberto Silva',
      status: 'Aberta',
      statusClass: 'info', // badge azul clara
      dataAbertura: '10/11/2025',
      valor: 120.0,
      acao: 'ver',
    },
  ];
}
