import { Address } from "./address";
import { Transport } from "./transport";

export interface Courier {
    id : number;
    name: string;
    phoneNumber: string;
    email: string;
    vaTnumber: string;
    isActive : boolean;
    address : Address; 
    transports: Transport[] | [];  
}
