import { Role } from "./role.entity";
import { User } from "./user.entity";

export class UserRole {
    constructor(
        public user: User,
        public roleId: Role,
    ) {

    }
}