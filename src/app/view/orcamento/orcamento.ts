import { Component } from '@angular/core';
import { Titulo } from '../../componentes/titulo/titulo';
import { Card } from '../../componentes/card/card';
import { PesquisaFiltro } from '../../componentes/pesquisa-filtro/pesquisa-filtro';
import { OptionDropdown } from '../../shared/models/option-dropdown';
import { Tabela } from '../../componentes/tabela/tabela';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orcamento',
  imports: [Titulo, Card, PesquisaFiltro, Tabela, CommonModule],
  templateUrl: './orcamento.html',
  styleUrl: './orcamento.scss',
})
export class Orcamento {
  protected listFiltro: OptionDropdown[] = [
    new OptionDropdown('Todos os status'),
    new OptionDropdown('Pendente'),
    new OptionDropdown('Aprovado'),
    new OptionDropdown('Recusado'),
    new OptionDropdown('Expirado'),
  ];

  protected listaCabecario: string[] = [
    'Número',
    'Cliente',
    'Veículo',
    'Emissão',
    'Validade',
    'Valor',
    'Status',
    'Ações',
  ];

  protected listaDados = [
    {
      codigo: 'ORC-2025-001',
      cliente: 'Maria Cliente',
      veiculo: 'Honda Civic',
      placa: 'ABC-1234',
      entrada: '07/11/2025',
      entrega: '14/11/2025',
      valor: 'R$ 780.00',
      status: 'Aprovado',
    },
    {
      codigo: 'ORC-2025-002',
      cliente: 'Pedro Santos',
      veiculo: 'Toyota Corolla',
      placa: 'XYZ-5678',
      entrada: '08/11/2025',
      entrega: '15/11/2025',
      valor: 'R$ 525.00',
      status: 'Aprovado',
    },
    {
      codigo: 'ORC-2025-003',
      cliente: 'Ana Costa',
      veiculo: 'Chevrolet Onix',
      placa: 'DEF-9012',
      entrada: '09/11/2025',
      entrega: '16/11/2025',
      valor: 'R$ 350.00',
      status: 'Recusado',
    },
    {
      codigo: 'ORC-2025-004',
      cliente: 'Maria Cliente',
      veiculo: 'Honda Civic',
      placa: 'ABC-1234',
      entrada: '24/10/2025',
      entrega: '29/10/2025',
      valor: 'R$ 555.00',
      status: 'Expirado',
    },
    {
      codigo: 'ORC-2025-005',
      cliente: 'Pedro Santos',
      veiculo: 'Toyota Corolla',
      placa: 'XYZ-5678',
      entrada: '10/11/2025',
      entrega: '17/11/2025',
      valor: 'R$ 120.00',
      status: 'Pendente',
    },
  ];

  protected valorPesquisa: string = '';
  protected valorFiltro: string = '';
  getPesquisa(valor: string) {
    this.valorPesquisa = valor;
  }
  getFilto(valor: string) {
    this.valorFiltro = valor;
  }
}
