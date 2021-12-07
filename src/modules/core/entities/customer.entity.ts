
import { CPF } from "../shared/models/cpf.entity";
import { Email } from "../shared/models/email.entity";
import { Name } from "../shared/models/name.entity";

export class Customer {

    constructor(
        public name: Name,
        public emailCustomer: Email,
        public cpf: CPF,

    ) {

    }
}