import { Component, Input, OnInit, Signal, input, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleService } from '../../../services/title.service';
import { TransportService } from '../../../services/transport.service';
import { Router } from '@angular/router';
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
  ],
  templateUrl: './transport-form.component.html',
  styleUrl: './transport-form.component.scss'
})
export class TransportFormComponent implements OnInit {
  form: FormGroup;

  emptybottles: Signal<IEmptybottle[]> = signal([]);
  allLocations: Signal<ILocation[]> = signal([]);
  couriers: Signal<ICourier[]> = signal([]);

  @Input()
  selectedBottle: IEmptybottle | null = null;

  @Input()
  selectedLocationFrom: ILocation | null = null;

  @Input()
  selectedLocationTo: ILocation | null = null;

  @Input()
  selectedCourier: ICourier | null = null;

  constructor(
    private readonly titleService: TitleService,
    private readonly formBuilder: FormBuilder,
    private readonly transportService: TransportService,
    private readonly router: Router,

    private readonly emptybottleService: EmptybottleService,
    private readonly locationService: LocationService,
    private readonly courierService : CourierService,
  ) {

    this.form = this.formBuilder.group({
      date: [null, []],
      emptybottles: this.formBuilder.array([]),
      locationFrom: [null, []],
      locationTo: [null, []],
      courier: [null, []]
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

  add() {
    console.log(this.bottles )
    this.bottles.push(this.formBuilder.group({
      typeName: null,
      quantity: 0
    }))
  }
  delete(){

  }

  submit() {
    console.log(this.form.value);

    if (this.form.invalid) {
      return;
    }

    this.transportService.insert(this.form.value)

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
