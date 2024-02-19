import { ITransport } from "./transport";

export interface IEmptybottle {
    id: number;
    typeName : string;
    quantity : number;
    prix : number | null;
    
    //FK
    transports: ITransport[] | [];
}
