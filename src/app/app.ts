import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './componentes/navbar/navbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('SGM');

  constructor(private router: Router) {}

  isLoginRoute(): boolean {
    return this.router.url === '/';
  }
}
