import { Location } from "./location";
import { Roleenum } from "./roleenum";
import { Siret } from "./siret";

export interface Store extends Location {
    VATnumber: string;
    roles: [Roleenum.Store];
    isPickUpPoint: boolean;
    isStorePoint : boolean;
    siret : Siret
}
