import { Component, Input } from '@angular/core';
import { OptionDropdown } from '../../shared/models/option-dropdown';

@Component({
  selector: 'app-dropdown-link',
  imports: [],
  templateUrl: './dropdown-link.html',
  styleUrl: './dropdown-link.scss',
})
export class DropdownLink {
  @Input({ required: true }) options: OptionDropdown[] = [];
  @Input({ required: true }) label: string = 'Label';
}
