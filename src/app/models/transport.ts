import { ICourier } from "./courier";
import { IEmptybottle } from "./emptybottle";
import { ILocation } from "./location";

export interface ITransport {
    id: number;
    date: Date;
    //many to many
    emptybottles: IEmptybottle[] | [];
    
    //one to many
    loctationFrom: ILocation | null;
    locationTo: ILocation | null;
    courier: ICourier;
}
