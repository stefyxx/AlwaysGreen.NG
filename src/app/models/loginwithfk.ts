import { ILogin } from "./login";
import { ILocation } from "./location";
import { IParticular } from "./particular";


export interface ILoginwithfk extends ILogin {
    depot: ILocation | null;
    particular : IParticular | null;
}
