import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { IEmptybottle } from '../../../models/emptybottle';
import { EmptybottleService } from '../../../services/emptybottle.service';

@Component({
  selector: 'app-allbottles',
  standalone: true,
  imports: [
    CommonModule, ButtonModule, TableModule,
    RouterLink
  ],
  templateUrl: './allbottles.component.html',
  styleUrl: './allbottles.component.scss'
})
export class AllbottlesComponent implements OnInit{
  allEmptybottles: Signal<IEmptybottle[]> = signal([]);

  constructor(
    private readonly emptybServices: EmptybottleService
  ) {}

  ngOnInit(): void {
    this.allEmptybottles = this.emptybServices.empybottles;
  }
  

}
