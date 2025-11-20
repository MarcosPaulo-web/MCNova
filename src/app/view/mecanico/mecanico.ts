import { Component } from '@angular/core';
import { Titulo } from '../../componentes/titulo/titulo';
import { Card } from '../../componentes/card/card';

import { InputPesquisa } from '../../componentes/input-pesquisa/input-pesquisa';
import { Tabela } from '../../componentes/tabela/tabela';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mecanico',
  imports: [Titulo, Card, InputPesquisa, Tabela, CommonModule],
  templateUrl: './mecanico.html',
  styleUrl: './mecanico.scss',
})
export class Mecanico {
  protected valorPesquisa: string = '';

  getPesquisa(valor: string) {
    this.valorPesquisa = valor;
  }

  protected listaCabecario: string[] = [
    'Nome',
    'CPF',
    'Especialidade',
    'Telefone',
    'Email',
    'Status',
    'Ações',
  ];

  listaBody = [
    {
      nome: 'Carlos Mecânico',
      cpf: '321.654.987-00',
      especialidade: 'Motor e Suspensão',
      telefone: '(11) 98765-4323',
      email: 'mecanico@mecanica.com',
      status: 'Ativo',
    },
    {
      nome: 'Roberto Silva',
      cpf: '654.321.987-00',
      especialidade: 'Elétrica e Eletrônica',
      telefone: '(11) 97654-3210',
      email: 'roberto.mecanico@mecanica.com',
      status: 'Ativo',
    },
    {
      nome: 'Fernando Alves',
      cpf: '789.456.123-00',
      especialidade: 'Freios e Ar Condicionado',
      telefone: '(11) 96543-2109',
      email: 'fernando.mecanico@mecanica.com',
      status: 'Inativo',
    },
  ];
}
