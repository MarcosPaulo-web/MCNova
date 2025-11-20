import { Agendamento } from './agendamento';

export class AgendamentoMecanico {
  constructor(
    public nome: string,
    public especialidade: string,
    public agendamentos: Agendamento[]
  ) {}
}
