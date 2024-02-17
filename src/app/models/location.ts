import { ArrayType } from "@angular/compiler";
import { Roleenum } from "./roleenum";
import { Address } from "./address";
import { Login } from "./login";
import { Transport } from "./transport";

type NewType = Roleenum;

export interface Location {
    id: Number;
    agencyname: string | null;
    companyname : string | null;
    phonenumber: string;
    email : string;
    roles : Roleenum[] | []; //ArrayType[NewType] --> x default non avrà il mio Enum
    isActive : boolean;
    //FK
    address: Address;
    login: Login;

    transportFrom: Transport[] | [];
    transportTo: Transport[] | [];
}
