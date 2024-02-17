import { Location } from "./location"; 
import { Roleenum } from "./roleenum";


export interface Depot extends Location {
    roles: [Roleenum.Depot];
}
