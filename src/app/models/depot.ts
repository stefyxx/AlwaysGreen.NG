import { ILocation } from "./location"; 
import { Roleenum } from "./roleenum";


export interface Depot extends ILocation {
    roles: [Roleenum.Depot];
}
