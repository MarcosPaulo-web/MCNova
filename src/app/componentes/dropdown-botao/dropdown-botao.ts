import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { OptionDropdown } from '../../shared/models/option-dropdown';

@Component({
  selector: 'app-dropdown-botao',
  imports: [],
  templateUrl: './dropdown-botao.html',
  styleUrl: './dropdown-botao.scss',
})
export class DropdownBotao implements OnInit {
  @Input() listDropdown: OptionDropdown[] = [];
  @Output() mandarFiltro = new EventEmitter<string>();
  protected dropdownLabel: string = '';

  select(event: Event) {
    const target = event.target as HTMLElement;
    this.dropdownLabel = target.textContent;
    const valueFilto = target.textContent.trim();
    this.mandarFiltro.emit(valueFilto);
  }

  ngOnInit() {
    if (this.listDropdown && this.listDropdown.length > 0) {
      this.dropdownLabel = this.listDropdown[0].label;
    }
  }
}
