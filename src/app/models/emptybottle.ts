import { ITransport } from "./transport";

export interface IEmptybottle {
    id: number;
    typename : string;
    quantity : number;
    prix : number | null;
    
    //FK
    transports: ITransport[] | [];
}
