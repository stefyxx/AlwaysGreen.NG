import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { MenuService } from './services/menu.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    NavComponent,
    ToastModule,
    ConfirmDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AlwaysGreen.NG';
  titleGlobal : Signal<string>;
  menuOpen: Signal<boolean>;

  constructor(
    private readonly menuService: MenuService,
    private readonly titleService: TitleService
  ) {
    this.menuOpen = menuService.isOpen;
    this.titleGlobal = titleService.title; 
  }
}
