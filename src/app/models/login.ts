import { Roleenum } from "./roleenum";

export interface Login {
    id: number;
    username: string;
    password : Uint8Array;
    roles : Roleenum[] | [];
}
