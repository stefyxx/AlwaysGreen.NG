import { Routes } from '@angular/router';
import { AllCouriersComponent } from './components/courier/all-couriers/all-couriers.component';
import { MyloginComponent } from './components/mylogin/mylogin.component';
import { AllbottlesComponent } from './components/emptybottle/allbottles/allbottles.component';
import { AlltransportsComponent } from './components/transport/alltransports/alltransports.component';
import { CourierFormComponent } from './components/courier/courier-form/courier-form.component';

export const routes: Routes = [
    //{ path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '', redirectTo: 'emptybottle', pathMatch: 'full' },
    { path: 'courier', component: AllCouriersComponent, title: 'Show all couriers' },
    { path: 'courier/update/:id', component: CourierFormComponent, title: 'Update courier' },
    { path: 'courier/insert', component: CourierFormComponent, title: 'Create a new courier'},
    { path: 'login', component: MyloginComponent, title: 'Login' },
    { path: 'emptybottle', component: AllbottlesComponent, title: 'Show all empty bottles' },
    { path: 'transport', component: AlltransportsComponent, title: 'Show all transports' }


];

export default routes;
