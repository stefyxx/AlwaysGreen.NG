import { Component } from '@angular/core';

@Component({
  selector: 'app-all-couriers',
  standalone: true,
  imports: [],
  templateUrl: './all-couriers.component.html',
  styleUrl: './all-couriers.component.scss'
})
export class AllCouriersComponent {

  allCouriers : Array<object> = []
}
