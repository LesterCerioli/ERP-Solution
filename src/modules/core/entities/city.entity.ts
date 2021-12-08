import { StateOrprovince } from "./stateOrProvince.entity";

export class City {
    constructor(
        public cityName: string,
        public stateField: StateOrprovince,
    ) {

    }
}