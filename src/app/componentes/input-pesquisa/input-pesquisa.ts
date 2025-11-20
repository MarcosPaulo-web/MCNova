import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-pesquisa',
  imports: [FormsModule],
  templateUrl: './input-pesquisa.html',
  styleUrl: './input-pesquisa.scss',
})
export class InputPesquisa {
  @Output() pesquisa = new EventEmitter<string>();
  @Input() label: string = 'Placeholder';
  protected value: string = '';

  onChangeValue() {
    this.pesquisa.emit(this.value);
  }
}
