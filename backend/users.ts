export class User {

    constructor(public email: string, 
                public name: string, 
                private password: string) { }

    matches(another: User) : boolean {
        return another !== undefined && another.email === this.email && another.password === this.password;
    }

}

export const users: {[key: string]: User} = {
    "lucas@gmail.com": new User('lucas@gmail.com', 'Lucas', '123'),
    "cris@gmail.com": new User('cris@gmail.com', 'Cris', '123'),
    "jaci@gmail.com": new User('jaci@gmail.com', 'Jaciara', '123'),
    "hellen@gmail.com": new User('hellen@gmail.com', 'Hellen', '123'),
    "toze@gmail.com": new User('toze@gmail.com', 'Antonio', '123'),
    "caique@gmail.com": new User('caique@gmail.com', 'Caique', '123')
}
