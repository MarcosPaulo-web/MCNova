import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao-grande',
  imports: [RouterLink],
  templateUrl: './botao-grande.html',
  styleUrl: './botao-grande.scss',
})
export class BotaoGrande {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() link?: string;
}
