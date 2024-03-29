import { IAddress } from "./address";
import { ITransport } from "./transport";

export interface ICourier {
    id : number;
    name: string;
    phoneNumber: string;
    email: string;
    vaTnumber: string;
    isActive : boolean;
    address : IAddress; 
    transports: ITransport[] | [];
    //property che mi serve SOLO nel creare p-dropdown
    label?: string; 
}
