import { Component } from '@angular/core';
import { Titulo } from '../../componentes/titulo/titulo';
import { Card } from '../../componentes/card/card';
import { PesquisaFiltro } from '../../componentes/pesquisa-filtro/pesquisa-filtro';
import { OptionDropdown } from '../../shared/models/option-dropdown';
import { Tabela } from '../../componentes/tabela/tabela';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [Titulo, Card, PesquisaFiltro, Tabela, CommonModule],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss',
})
export class Usuario {
  protected listFiltro: OptionDropdown[] = [
    new OptionDropdown('Todas as Funções'),
    new OptionDropdown('Atendentes'),
    new OptionDropdown('Mecânicos'),
  ];
  protected listaUsuarios = [
    {
      nome: 'Administrador',
      email: 'admin@mecanica.com',
      telefone: '(11) 98765-4321',
      cpf: '-',
      funcao: 'Administrador',
    },
    {
      nome: 'João Silva',
      email: 'atendente@mecanica.com',
      telefone: '(11) 98765-4322',
      cpf: '-',
      funcao: 'Atendente',
    },
    {
      nome: 'Carlos Mecânico',
      email: 'mecanico@mecanica.com',
      telefone: '(11) 98765-4323',
      cpf: '321.654.987-00',
      funcao: 'Mecânico',
    },
  ];

  protected listaCabecario: string[] = ['Nome', 'Email', 'Telefone', 'CPF', 'Função', 'Ações'];

  protected valorPesquisa: string = '';
  protected valorFiltro: string = '';

  getFiltro(valor: string) {
    this.valorFiltro = valor;
  }
  getPesquisa(valor: string) {
    this.valorPesquisa = valor;
  }
}
