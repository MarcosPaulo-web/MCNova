import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './barra-lateral.html',
  styleUrl: './barra-lateral.scss',
})
export class BarraLateral {}
