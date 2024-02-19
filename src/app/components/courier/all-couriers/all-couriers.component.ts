import { Component, OnInit, Signal, effect, signal } from '@angular/core';
import { ICourier } from '../../../models/courier';
import { CommonModule } from '@angular/common';
import { CourierService } from '../../../services/courier.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-couriers',
  standalone: true,
  imports: [
    CommonModule, ButtonModule, TableModule,
    RouterLink
  ],
  templateUrl: './all-couriers.component.html',
  styleUrl: './all-couriers.component.scss'
})
export class AllCouriersComponent implements OnInit {

  //allCouriers : ICourier[] = [];

  allCouriers: Signal<ICourier[]> = signal([]);

  constructor(
    private readonly courierService: CourierService
  ) {}

  ngOnInit(): void {
    this.allCouriers = this.courierService.couriers;
    //effect(()=>{console.log(this.allCouriers())})
  }
}
