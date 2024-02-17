import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: '[app-nav]',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  links: any[] = [
    { title: 'Tous les couriers', link: '/couriers', icon: 'pi pi-amazon' },
    { title: 'Tous les empty bottles', link: '/emptybottles', icon: 'pi pi-android' },
    { title: 'Picks up Point', link: '/storespickuppoint', icon: 'pi pi-map-marker' },
    { title: 'Start a transport', link: '/transport', icon: 'pi pi-globe' },
    
  ]
}
