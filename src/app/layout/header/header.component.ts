import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: '[app-header]', //cosi' é come una class
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private readonly menuService: MenuService
  ) {}

  toggleNav() {
    this.menuService.toggleOpen();
  }

}
