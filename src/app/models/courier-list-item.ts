import { Address } from "./address";

export interface CourierListItem {
    id : number;
    name: string;
    phoneNumber: string;
    email: string;
    vaTnumber: string;
    isActive : boolean;
    address : Address;
    
}
