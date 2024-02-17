import { Transport } from "./transport";

export interface Emptybottle {
    id: number;
    typename : string;
    quantity : number;
    prix : number | null;
    
    //FK
    transports: Transport[] | [];
}
