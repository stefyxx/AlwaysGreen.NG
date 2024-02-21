import { Roleenum } from "./roleenum";
import { IAddress } from "./address";
import { ILogin } from "./login";
import { ITransport } from "./transport";

//type NewType = Roleenum;

export interface ILocation {
    id: Number;
    agencyName: string | null;
    companyName: string | null;
    phoneNumber: string;
    email: string;
    roles: Roleenum[] | []; //ArrayType[NewType] --> x default non avrà il mio Enum
    isActive: boolean;
    //property che mi serve SOLO nel creare p-dropdown
    label?: string;

    //FK
    address: IAddress;
    login: ILogin;

    transportFrom: ITransport[] | [];
    transportTo: ITransport[] | [];
}
