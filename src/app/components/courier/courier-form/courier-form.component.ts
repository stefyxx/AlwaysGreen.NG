import { Component } from '@angular/core';
import { CourierService } from '../../../services/courier.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { max } from 'rxjs';
import { FormErrorComponent } from '../../form/form-error/form-error.component';
import { InputAddressComponent } from '../../form/input-address/input-address.component';

@Component({
  selector: 'app-courier-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FormErrorComponent,
    InputAddressComponent
  ],
  templateUrl: './courier-form.component.html',
  styleUrl: './courier-form.component.scss'
})
export class CourierFormComponent {
  //Create a new courier
  //insert --> no id et isActive
  form: FormGroup;

  constructor(
    private readonly courierService : CourierService,
    private readonly formBuilder: FormBuilder,
  ) {
    this.form = formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(255)]],
      phoneNumber: [null, [Validators.required, Validators.maxLength(15)]],
      email: [null, [Validators.required, Validators.email]],
      vaTnumber: [null, [Validators.required]],
      address : [null,
       []]
      //birthDate: [new Date(), [Validators.required]],
    })
  }

  submit(){
    if(this.form.invalid) {
      return;
    }
    this.courierService.insert(this.form.value);
  }
   
  //'Update courier'
}
