import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: '[app-header]', //cosi' é come una class
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  //login : string = "/login"
  constructor(
    private readonly menuService: MenuService
  ) {}

  toggleNav() {
    this.menuService.toggleOpen();
  }

}
