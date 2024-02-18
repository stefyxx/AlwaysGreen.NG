import { ILocation } from "./location";
import { Roleenum } from "./roleenum";
import { ISiret } from "./siret";

export interface ICompany extends ILocation{
    VATnumber: string;
    roles : [Roleenum.Company];
    siret : ISiret;
}
