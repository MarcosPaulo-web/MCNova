import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OptionDropdown } from '../../shared/models/option-dropdown';
import { InputPesquisa } from '../input-pesquisa/input-pesquisa';
import { DropdownBotao } from '../dropdown-botao/dropdown-botao';

@Component({
  selector: 'app-pesquisa-filtro',
  imports: [FormsModule, InputPesquisa, DropdownBotao],
  templateUrl: './pesquisa-filtro.html',
  styleUrl: './pesquisa-filtro.scss',
})
export class PesquisaFiltro {
  @Output() pesquisa = new EventEmitter<string>();
  @Output() receberFiltro = new EventEmitter<string>();
  @Input() listFiltro: OptionDropdown[] = [];
  @Input() label: string = '';

  receberPesquisa(valor: string) {
    this.pesquisa.emit(valor);
  }

  mandarFiltro(filtro: string) {
    this.receberFiltro.emit(filtro);
  }
}
