import { Location } from "./location";
import { Roleenum } from "./roleenum";
import { Siret } from "./siret";

export interface Company extends Location{
    VATnumber: string;
    roles : [Roleenum.Company];
    siret : Siret;
}
