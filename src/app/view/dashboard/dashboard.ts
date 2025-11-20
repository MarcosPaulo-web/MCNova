import { Component } from '@angular/core';
import { Card } from '../../componentes/card/card';
import { BotaoGrande } from '../../componentes/botao-grande/botao-grande';
import { ListItem } from '../../componentes/list-item/list-item';
import { Titulo } from '../../componentes/titulo/titulo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Card, BotaoGrande, ListItem, Titulo, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
