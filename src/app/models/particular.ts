import { IAddress } from "./address";
import { ILogin } from "./login";
import { Roleenum } from "./roleenum";

export interface IParticular {
    id: number;
    firstname:string;
    lastname: string;
    phonenumber: string;
    email : string;
    roles: [Roleenum.Particular];
    isActive: boolean;
    //FK
    address: IAddress;
    login: ILogin;
}
