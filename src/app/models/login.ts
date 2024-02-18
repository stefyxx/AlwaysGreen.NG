import { Roleenum } from "./roleenum";

export interface ILogin {
    id: number;
    username: string;
    password : Uint8Array;
    roles : Roleenum[] | [];
}
