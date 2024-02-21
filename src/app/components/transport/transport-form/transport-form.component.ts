import { Component, Input, OnInit, Signal, input, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleService } from '../../../services/title.service';
import { TransportService } from '../../../services/transport.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormErrorComponent } from '../../form/form-error/form-error.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { IEmptybottle } from '../../../models/emptybottle';
import { EmptybottleService } from '../../../services/emptybottle.service';
import { LocationService } from '../../../services/location.service';
import { ILocation } from '../../../models/location';
import { ICourier } from '../../../models/courier';
import { CourierService } from '../../../services/courier.service';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { Router, RouterLink } from '@angular/router';
import { DateValidators } from '../../../validators/date.validators';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-transport-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FormErrorComponent,
    TableModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    RouterLink
  ],
  templateUrl: './transport-form.component.html',
  styleUrl: './transport-form.component.scss'
})
export class TransportFormComponent implements OnInit {
  form: FormGroup;

  emptybottles: Signal<IEmptybottle[]> = signal([]);
  allLocations: Signal<ILocation[]> = signal([]);
  couriers: Signal<ICourier[]> = signal([]);
  //non ne ho bisogno perche uso FormControllName che, oltre a fae controllo, fa anche da @Input()
  // @Input()
  // selectedBottle: IEmptybottle | null = null;

  // @Input()
  // selectedLocationFrom: ILocation | null = null;

  // @Input()
  // selectedLocationTo: ILocation | null = null;

  // @Input()
  // selectedCourier: ICourier | null = null;

  constructor(
    private readonly titleService: TitleService,
    private readonly formBuilder: FormBuilder,
    private readonly transportService: TransportService,
    private readonly router: Router,

    private readonly emptybottleService: EmptybottleService,
    private readonly locationService: LocationService,
    private readonly courierService : CourierService,
    private readonly messageService: MessageService
  ) {

    this.form = this.formBuilder.group({
      date: [null, [Validators.required, DateValidators.beforeToday]],
      emptybottles: this.formBuilder.array([]),
      locationFrom: [null, [Validators.required]],
      locationTo: [null, [Validators.required]],
      courier: [null, [Validators.required]],
      quantity:[0,[Validators.min(1)]]
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle('Start a new transport');

    //valore per default
    this.emptybottles = this.emptybottleService.empybottles;
    this.allLocations = this.locationService.allLocations;
    this.couriers = this.courierService.couriers;

    this.form.patchValue({
      date: new Date(),
    });

    this.add();
  }

  //add a row into ng-container
  add() {
    console.log(this.bottles )
    this.bottles.push(this.formBuilder.group({
      typeName: null,
      quantity: 0
    }))
  }

  delete(index : number){
    //devo trovare index e poi split a quell'index
    this.bottles.removeAt(index)
  }

  submit() {
    console.log(this.form.value);

    if (this.form.invalid) {
      return;
    }

    this.transportService.insert(this.form.value)
    this.messageService.add(
      {
        severity: 'success',
        summary: 'Your transport has been well created',
        detail: '',
        icon: 'pi pi-check'
      }
    )

    //ritorno a Transport
    this.router.navigate(['transport']);
  }

  //lista diversa da emptybottles
  //emptybottles é riempita da DB, 
  //bottles é la lista delle bottiglie che voglio recuperare con la loro quantità
  get bottles() {
    return this.form.controls["emptybottles"] as FormArray;
  }
}
