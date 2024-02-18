import { Roleenum } from "./roleenum";
import { IAddress } from "./address";
import { ILogin } from "./login";
import { ITransport } from "./transport";

//type NewType = Roleenum;

export interface ILocation {
    id: Number;
    agencyname: string | null;
    companyname : string | null;
    phonenumber: string;
    email : string;
    roles : Roleenum[] | []; //ArrayType[NewType] --> x default non avrà il mio Enum
    isActive : boolean;
    //FK
    address: IAddress;
    login: ILogin;

    transportFrom: ITransport[] | [];
    transportTo: ITransport[] | [];
}
