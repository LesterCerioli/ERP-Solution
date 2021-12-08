
import { Email } from "../shared/models/email.entity";
import { Name } from "../shared/models/name.entity";

export class User {
    constructor(
        public userName: Name,
        public login: string,
        public emailAddress: Email,
        public password: string,
        public createdOn: Date,
        public createdBy: string,
    ) {

    }
    
}