import { Login } from "./login";
import { Location } from "./location";
import { Particular } from "./particular";

export interface Loginwithfk extends Login {
    depot: Location | null;
    particular : Particular | null;
}
