import { Routes } from '@angular/router';
import { Dashboard } from './view/dashboard/dashboard';
import { Login } from './view/login/login';
import { NotFound } from './view/not-found/not-found';
import { OrdensServico } from './view/ordens-servico/ordens-servico';
import { Agenda } from './view/agenda/agenda';
import { Clientes } from './view/clientes/clientes';
import { Estoque } from './view/estoque/estoque';
import { Orcamento } from './view/orcamento/orcamento';
import { Usuario } from './view/usuario/usuario';
import { Mecanico } from './view/mecanico/mecanico';
import { Faturamento } from './view/faturamento/faturamento';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: Dashboard },
  { path: 'ordens', component: OrdensServico },
  { path: 'agenda', component: Agenda },
  { path: 'clientes', component: Clientes },
  { path: 'estoque', component: Estoque },
  { path: 'orcamento', component: Orcamento },
  { path: 'usuario', component: Usuario },
  { path: 'mecanico', component: Mecanico },
  { path: 'faturamento', component: Faturamento },
  { path: '**', component: NotFound },
];
