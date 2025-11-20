import { Component } from '@angular/core';
import { OptionDropdown } from '../../shared/models/option-dropdown';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { BarraLateral } from '../barra-lateral/barra-lateral';
import { ThemeService } from '../../service/theme.service';
import { DropdownLink } from '../dropdown-link/dropdown-link';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, BarraLateral, DropdownLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  public constructor(private theme: ThemeService) {}
  protected listDropdown: OptionDropdown[] = [
    new OptionDropdown('Logout', '/'),
    {
      label: 'Mudar Tema',
      onClick: () => {
        this.theme.toggleTheme();
      },
    },
  ];
}
