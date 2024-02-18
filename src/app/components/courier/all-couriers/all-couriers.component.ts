import { Component } from '@angular/core';
import { ICourier } from '../../../models/courier';

@Component({
  selector: 'app-all-couriers',
  standalone: true,
  imports: [],
  templateUrl: './all-couriers.component.html',
  styleUrl: './all-couriers.component.scss'
})
export class AllCouriersComponent {

  allCouriers : ICourier[] = [];
}
