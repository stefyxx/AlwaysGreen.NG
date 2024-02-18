import { Routes } from '@angular/router';
import { AllCouriersComponent } from './components/courier/all-couriers/all-couriers.component';

export const routes: Routes = [
    //{ path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '', redirectTo: 'emptybottle', pathMatch: 'full' },
    { path: 'courier', component: AllCouriersComponent, title:'Show all couriers'},
    
];

export default routes;
