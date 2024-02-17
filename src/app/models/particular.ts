import { Address } from "./address";
import { Login } from "./login";
import { Roleenum } from "./roleenum";

export interface Particular {
    id: number;
    firstname:string;
    lastname: string;
    phonenumber: string;
    email : string;
    roles: [Roleenum.Particular];
    isActive: boolean;
    //FK
    address: Address;
    login: Login;
}
