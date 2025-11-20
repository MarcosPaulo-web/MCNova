import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.html',
  styleUrl: './titulo.scss',
})
export class Titulo {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
