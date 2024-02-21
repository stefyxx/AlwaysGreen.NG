import { Component, OnInit, Signal, effect, signal } from '@angular/core';
import { ICourier } from '../../../models/courier';
import { CommonModule } from '@angular/common';
import { CourierService } from '../../../services/courier.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { TitleService } from '../../../services/title.service';
import { ConfirmationService, MessageService } from 'primeng/api';

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

  allCouriers: Signal<ICourier[]> = signal([]);

  constructor(
    private readonly courierService: CourierService,
    private readonly titleService: TitleService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,

  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('All couriers');
    this.allCouriers = this.courierService.couriers;
    //effect(()=>{console.log(this.allCouriers())})
  }

  delete(courier : ICourier){
    console.log(courier);

    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Are you sure you want to proceed with the delete?',
      accept: () => {
        this.courierService.remove(courier.id);
        this.messageService.add({ 
            severity: 'success',
            summary: 'Your courier has been deleted',
            detail: '',
            icon: 'pi pi-check'
         })
      },
    })
  }
}
