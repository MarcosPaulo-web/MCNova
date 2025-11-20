import { Component, Input } from '@angular/core';
import { AgendamentoMecanico } from '../../shared/models/agendamento-mecanico';

@Component({
  selector: 'app-card-agendamento',
  imports: [],
  templateUrl: './card-agendamento.html',
  styleUrl: './card-agendamento.scss',
})
export class CardAgendamento {
  @Input() mecanicos: AgendamentoMecanico[] = [];
}
