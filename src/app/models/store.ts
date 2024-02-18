import { ILocation } from "./location";
import { Roleenum } from "./roleenum";
import { ISiret } from "./siret";

export interface IStore extends ILocation {
    VATnumber: string;
    roles: [Roleenum.Store];
    isPickUpPoint: boolean;
    isStorePoint : boolean;
    siret : ISiret
}
