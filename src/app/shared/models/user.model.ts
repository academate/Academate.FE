export class User {
    id: number;
    userName: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
}

export class LoginCredentials {
    userName: string;
    password: string;
}
