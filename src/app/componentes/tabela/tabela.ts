import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela',
  imports: [],
  templateUrl: './tabela.html',
  styleUrl: './tabela.scss',
})
export class Tabela {
  @Input() cabecario: string[] = [];
}
