import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) num: string = '';
}
