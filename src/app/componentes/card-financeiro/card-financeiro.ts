import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-financeiro',
  imports: [CommonModule],
  templateUrl: './card-financeiro.html',
  styleUrl: './card-financeiro.scss',
})
export class CardFinanceiro {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() preco: string = '';
  @Input() infoAdd?: string = '';
  @Input() class: string = 'bg-secondary-subtle';
}
