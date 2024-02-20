import { Component, OnInit } from '@angular/core';
import { CourierService } from '../../../services/courier.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormErrorComponent } from '../../form/form-error/form-error.component';
import { InputAddressComponent } from '../../form/input-address/input-address.component';
import { ButtonModule } from 'primeng/button';
import { TitleService } from '../../../services/title.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { AddressValidators } from '../../../validators/address.validators';
//import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-courier-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FormErrorComponent,
    InputAddressComponent,
    ButtonModule
  ],
  templateUrl: './courier-form.component.html',
  styleUrl: './courier-form.component.scss'
})
export class CourierFormComponent {
  form: FormGroup;
  id: number|null= null;

  constructor(
    private readonly courierService : CourierService,
    private readonly formBuilder: FormBuilder,
    private readonly titleService: TitleService,
    private readonly router: Router,
    private readonly route : ActivatedRoute,
    //private readonly messageService: MessageService
  ) 
  {
    this.titleService.setTitle('Create a new courier');

    this.form = formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(255)]],
      phoneNumber: [null, [Validators.required, Validators.maxLength(15)]],
      email: [null, [Validators.required, Validators.email]],
      vaTnumber: [null, [Validators.required]],
      address: [null, []]})
    
      this.id = parseInt(this.route.snapshot.params['id'])

      if(this.id){
        const courier = this.courierService.get(this.id);
        console.log(courier);
        if(courier){
          this.form.patchValue({...courier})
        }
      }
  }
  
  submit(){
    console.log(this.form.value);
    
    if(this.form.invalid) {
      return;
    }

    this.id = parseInt(this.route.snapshot.params['id']);
    console.log(this.id);
    if(this.id){
      //update
      this.courierService.update(this.id, this.form.value)
    }
    else{
      this.courierService.insert(this.form.value);
    }

    //sms prime costum
    // this.messageService.add(
    //   {
    //   severity : 'success',
    //   summary: 'Your courier has been well added in our DB',
    //   detail: '',
    //   icon: 'pi pi-check'}
    // )

    //ritorno a Home
    this.router.navigate(['']);
  }

}
