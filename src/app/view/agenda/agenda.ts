import { Component } from '@angular/core';
import { Titulo } from '../../componentes/titulo/titulo';
import { DropdownBotao } from '../../componentes/dropdown-botao/dropdown-botao';
import { OptionDropdown } from '../../shared/models/option-dropdown';
import { Card } from '../../componentes/card/card';
import { DatePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardAgendamento } from '../../componentes/card-agendamento/card-agendamento';
import { AgendamentoMecanico } from '../../shared/models/agendamento-mecanico';

@Component({
  selector: 'app-agenda',
  imports: [Titulo, DropdownBotao, Card, DatePipe, FormsModule, CardAgendamento],
  templateUrl: './agenda.html',
  styleUrl: './agenda.scss',
})
export class Agenda {
  protected listaMecanico: OptionDropdown[] = [
    new OptionDropdown('Todos os Mecânicos'),
    new OptionDropdown('Carlos'),
    new OptionDropdown('Ana costa'),
  ];
  protected mecanicoSelecionado: string = '';
  selecionarMecanico(mecanico: string) {
    this.mecanicoSelecionado = mecanico;
  }

  protected date: Date = new Date();

  // valor convertido para o input
  get dateString(): string {
    return this.date.toISOString().split('T')[0];
  }

  onDateChange(value: string) {
    // transforma YYYY-MM-DD em Date
    this.date = new Date(value + 'T00:00:00');
  }
  protected listaMecanicos: AgendamentoMecanico[] = [
    {
      nome: 'Rafael Monteiro',
      especialidade: 'suspensão e elétrica',
      agendamentos: [
        {
          hora: '09:00',
          os: 'OS-2025-002',
          cliente: 'Maria Santos - Fiat Argo',
          dataCadastro: '10/11/2025',
          mecanico: 'Rafael Monteiro',
        },
        {
          hora: '14:30',
          os: 'OS-2025-010',
          cliente: 'Carlos Ribeiro - VW Gol',
          dataCadastro: '12/11/2025',
          mecanico: 'Rafael Monteiro',
        },
      ],
    },
    {
      nome: 'Juliana Ferreira',
      especialidade: 'motor e transmissão',
      agendamentos: [
        {
          hora: '08:15',
          os: 'OS-2025-004',
          cliente: 'Lucas Andrade - Honda Fit',
          dataCadastro: '09/11/2025',
          mecanico: 'Juliana Ferreira',
        },
        {
          hora: '11:45',
          os: 'OS-2025-011',
          cliente: 'Patrícia Gomes - Toyota Corolla',
          dataCadastro: '12/11/2025',
          mecanico: 'Juliana Ferreira',
        },
      ],
    },
  ];
}
