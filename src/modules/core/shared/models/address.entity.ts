import { City } from "../../entities/city.entity";
import { Country } from "../../entities/country.entity";
import { District } from "../../entities/district.entity";
import { StateOrprovince } from "../../entities/stateOrProvince.entity";

export class Address {
    constructor(
        public addressLine1: string,
        public addressline2: string,
        public city: City,
        public district: District,
        public stateorprovince: StateOrprovince,
        public country: Country,
        public zipCode: string,
    ) {

    }
}