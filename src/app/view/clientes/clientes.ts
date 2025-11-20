import { Component } from '@angular/core';
import { Titulo } from '../../componentes/titulo/titulo';
import { InputPesquisa } from '../../componentes/input-pesquisa/input-pesquisa';
import { Tabela } from '../../componentes/tabela/tabela';

@Component({
  selector: 'app-clientes',
  imports: [Titulo, InputPesquisa, Tabela],
  templateUrl: './clientes.html',
  styleUrl: './clientes.scss',
})
export class Clientes {
  protected inputValue: string = '';
  getInputValue(value: string) {
    this.inputValue = value;
  }

  colunas: string[] = ['NOME', 'CPF', 'TELEFONE', 'EMAIL', 'ENDEREÇO', 'AÇÕES'];
}
