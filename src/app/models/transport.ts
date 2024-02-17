import { Courier } from "./courier";
import { Emptybottle } from "./emptybottle";
import { Location } from "./location";

export interface Transport {
    id: number;
    date: Date;
    //many to many
    emptybottles: Emptybottle[] | [];
    
    //one to many
    loctationFrom: Location | null;
    locationTo: Location | null;
    courier: Courier;
}
