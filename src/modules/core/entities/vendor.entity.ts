import { Email } from "../shared/models/email.entity";
import { User } from "./user.entity";

export class Vendor {
    constructor(
        public name: string,
        public slug: string,
        public description: string,
        public email: Email,
        public createdOn: Date,
        public latestUpdatedOn: Date,
        public isActive: boolean,
        public isDeleted: boolean,
        public user: User,
    ) {

    }
}