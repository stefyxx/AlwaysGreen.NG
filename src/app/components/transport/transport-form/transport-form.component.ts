import { Component, Input, OnInit, Signal, input, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleService } from '../../../services/title.service';
import { TransportService } from '../../../services/transport.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormErrorComponent } from '../../form/form-error/form-error.component';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { IEmptybottle } from '../../../models/emptybottle';
import { EmptybottleService } from '../../../services/emptybottle.service';
import { LocationService } from '../../../services/location.service';
import { ILocation } from '../../../models/location';

@Component({
  selector: 'app-transport-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FormErrorComponent,
    ButtonModule,
    DropdownModule
  ],
  templateUrl: './transport-form.component.html',
  styleUrl: './transport-form.component.scss'
})
export class TransportFormComponent implements OnInit {
  form: FormGroup;

  emptybottles: Signal<IEmptybottle[]> = signal([]);
  allLocations : Signal<ILocation[]> = signal([]);

  @Input()
  selectedBottle: IEmptybottle | null = null;
  
  constructor(
    private readonly titleService: TitleService,
    private readonly formBuilder: FormBuilder,
    private readonly transportService: TransportService,
    private readonly router: Router,

    private readonly emptybottleService : EmptybottleService,
    private readonly locationService: LocationService
  ) {

    this.form = this.formBuilder.group({
      date: [null, []],
      emptybottles: [null, []],
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

    this.form.patchValue({ 
      date: new Date(), 
      emptybottles: this.emptybottles });
      


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
}
